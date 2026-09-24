import { jsPDF } from 'jspdf';
import { Project, UnitFloorPlan } from '../types';

export const generateBrochurePDF = (project: Project, floorPlan: UnitFloorPlan) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const primaryGold = [197, 155, 39]; // #C59B27
  const darkNavy = [11, 17, 30]; // #0B111E
  const slateText = [71, 85, 105]; // slate-600

  // Header Banner Background
  doc.setFillColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.rect(0, 0, 210, 52, 'F');

  // Gold accent bar
  doc.setFillColor(primaryGold[0], primaryGold[1], primaryGold[2]);
  doc.rect(0, 52, 210, 2.5, 'F');

  // Logo & Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('VILLAMARK PROPERTIES', 15, 20);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(primaryGold[0], primaryGold[1], primaryGold[2]);
  doc.text('ARCHITECTURAL EXCELLENCE · SUVASTU STANDARD LUXURY', 15, 27);

  doc.setTextColor(200, 210, 225);
  doc.setFontSize(9);
  doc.text('OFFICIAL E-BROCHURE & SPECIFICATION DOSSIER', 15, 36);
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`, 15, 42);

  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text('WhatsApp: +880 1825-115384', 195, 18, { align: 'right' });
  doc.setFontSize(8);
  doc.setTextColor(215, 225, 240);
  doc.text('villamarkproperties@gmail.com', 195, 24, { align: 'right' });
  doc.text('www.villamarkproperties.com', 195, 30, { align: 'right' });
  doc.setFontSize(7.5);
  doc.setTextColor(180, 190, 205);
  doc.text('Banasree, Rampura, Dhaka-1219', 195, 36, { align: 'right' });

  // Project Main Header
  let y = 65;
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(project.title.toUpperCase(), 15, y);

  y += 7;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(slateText[0], slateText[1], slateText[2]);
  doc.text(project.subtitle, 15, y);

  // Project Quick Specs Bar
  y += 10;
  doc.setFillColor(248, 250, 252); // light slate
  doc.roundedRect(15, y, 180, 22, 2, 2, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(15, y, 180, 22, 2, 2, 'D');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(slateText[0], slateText[1], slateText[2]);

  doc.text('LOCATION', 22, y + 7);
  doc.text('LAND SIZE', 67, y + 7);
  doc.text('ROAD WIDTH', 112, y + 7);
  doc.text('HANDOVER', 157, y + 7);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text(project.location, 22, y + 15);
  doc.text(project.landSizeKatha, 67, y + 15);
  doc.text(project.roadWidthFt, 112, y + 15);
  doc.text(project.handoverDate, 157, y + 15);

  // Selected Unit Floor Plan Info
  y += 30;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text(`SELECTED UNIT: ${floorPlan.name.toUpperCase()}`, 15, y);

  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(primaryGold[0], primaryGold[1], primaryGold[2]);
  doc.text(`Facing: ${floorPlan.facing}`, 15, y);

  // Floor Plan Metrics Box
  y += 7;
  const metrics = [
    { label: 'Gross Area', value: `${floorPlan.grossAreaSft.toLocaleString()} Sft` },
    { label: 'Net Carpet Area', value: `${floorPlan.netCarpetSft.toLocaleString()} Sft` },
    { label: 'Bedrooms', value: `${floorPlan.bedrooms} En-suite` },
    { label: 'Bathrooms', value: `${floorPlan.bathrooms} Luxury Baths` },
    { label: 'Balconies', value: `${floorPlan.balconies} Verandahs` }
  ];

  const colWidth = 36;
  metrics.forEach((m, idx) => {
    const xPos = 15 + idx * colWidth;
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(xPos, y, 34, 16, 1.5, 1.5, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(m.label.toUpperCase(), xPos + 17, y + 6, { align: 'center' });
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    doc.text(m.value, xPos + 17, y + 12, { align: 'center' });
  });

  // Square Footage Breakdown Table
  y += 24;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text('DETAILED SQUARE FOOTAGE BREAKDOWN', 15, y);

  y += 4;
  // Table Header
  doc.setFillColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.rect(15, y, 180, 7, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('ROOM / SPACE DESCRIPTION', 20, y + 5);
  doc.text('DIMENSIONS (CLEAR)', 110, y + 5);
  doc.text('AREA (SFT)', 165, y + 5);

  y += 7;
  let subtotalSft = 0;
  floorPlan.breakdown.forEach((item, index) => {
    subtotalSft += item.areaSft;
    const isEven = index % 2 === 0;
    if (isEven) {
      doc.setFillColor(248, 250, 252);
      doc.rect(15, y, 180, 6, 'F');
    }
    doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text(item.name, 20, y + 4.2);
    doc.text(item.dimension, 110, y + 4.2);
    doc.setFont('helvetica', 'bold');
    doc.text(`${item.areaSft} Sft`, 175, y + 4.2, { align: 'right' });
    y += 6;
  });

  // Common circulation line
  const commonSft = floorPlan.grossAreaSft - subtotalSft;
  if (commonSft > 0) {
    doc.setFillColor(254, 243, 199); // amber 100
    doc.rect(15, y, 180, 6, 'F');
    doc.setTextColor(146, 64, 14);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.text('Common Building Facilities, Lobbies, Service Shafts & Lift Core', 20, y + 4.2);
    doc.text('Shared Ratio', 110, y + 4.2);
    doc.setFont('helvetica', 'bold');
    doc.text(`${commonSft} Sft`, 175, y + 4.2, { align: 'right' });
    y += 6;
  }

  // Total Row
  doc.setFillColor(226, 232, 240);
  doc.rect(15, y, 180, 6.5, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text('TOTAL GROSS APARTMENT SUPER AREA', 20, y + 4.5);
  doc.text(`${floorPlan.grossAreaSft.toLocaleString()} SFT`, 175, y + 4.5, { align: 'right' });

  // Architectural Specifications & Standards
  y += 12;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.text('SUVASTU-STANDARD LUXURY FINISHING HIGHLIGHTS', 15, y);

  y += 5;
  const featuresList = floorPlan.features.length > 0 ? floorPlan.features : project.highlights.slice(0, 4);
  featuresList.slice(0, 4).forEach((feat) => {
    doc.setFillColor(primaryGold[0], primaryGold[1], primaryGold[2]);
    doc.circle(18, y - 1, 1.2, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(slateText[0], slateText[1], slateText[2]);
    doc.text(feat, 23, y);
    y += 5;
  });

  // Footer CTA Box
  const footerY = 265;
  doc.setFillColor(darkNavy[0], darkNavy[1], darkNavy[2]);
  doc.rect(15, footerY, 180, 22, 'F');

  doc.setTextColor(primaryGold[0], primaryGold[1], primaryGold[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('SCHEDULE A PRIVATE SITE VISIT OR LANDOWNER CONSULTATION', 22, footerY + 8);

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('WhatsApp: +880 1825-115384 | Web: www.villamarkproperties.com | FB: facebook.com/vilamarkproperties', 22, footerY + 15);

  const cleanFilename = `${project.title.toLowerCase().replace(/\s+/g, '-')}-floor-plan-${floorPlan.id}.pdf`;
  doc.save(cleanFilename);
};
