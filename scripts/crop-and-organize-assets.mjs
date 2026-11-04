import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function cropAndOrganize() {
  const dirs = [
    'public/images/branding',
    'public/images/hero',
    'public/images/exterior',
    'public/images/interiors',
    'public/images/floor-plans',
    'public/images/amenities',
    'public/images/portfolio',
    'public/fonts'
  ];

  for (const d of dirs) {
    if (!fs.existsSync(d)) {
      fs.mkdirSync(d, { recursive: true });
    }
  }

  const p1 = sharp('temp-pdf-pages/page-1.png');
  const p2 = sharp('temp-pdf-pages/page-2.png');
  const p3 = sharp('temp-pdf-pages/page-3.png');
  const p4 = sharp('temp-pdf-pages/page-4.png');
  const p5 = sharp('temp-pdf-pages/page-5.png');
  const p6 = sharp('temp-pdf-pages/page-6.png');
  const p7 = sharp('temp-pdf-pages/page-7.png');

  console.log('Extracting branding...');
  // Lotus Properties Logo from Page 7
  await p7.clone()
    .extract({ left: 450, top: 155, width: 295, height: 260 })
    .png()
    .toFile('public/images/branding/lotus-properties-logo.png');

  // Lotus Signature Logo from Page 1
  await p1.clone()
    .extract({ left: 340, top: 1140, width: 520, height: 290 })
    .png()
    .toFile('public/images/branding/lotus-signature-logo.png');

  console.log('Extracting exterior and hero renders...');
  // Main exterior render from page 1 (isolated building on light background)
  await p1.clone()
    .extract({ left: 230, top: 480, width: 730, height: 650 })
    .webp({ quality: 90 })
    .toFile('public/images/exterior/building-day.webp');

  // Page 1 hero crop
  await p1.clone()
    .extract({ left: 180, top: 380, width: 830, height: 800 })
    .webp({ quality: 90 })
    .toFile('public/images/hero/hero-building.webp');

  // Page 2 Dusk Render (full building perspective with landscaping and warm lights)
  await p2.clone()
    .extract({ left: 0, top: 0, width: 1720, height: 1450 })
    .webp({ quality: 90 })
    .toFile('public/images/hero/hero-exterior.webp');

  await p2.clone()
    .extract({ left: 0, top: 0, width: 2380, height: 1680 })
    .webp({ quality: 90 })
    .toFile('public/images/exterior/exterior-dusk-full.webp');

  await p2.clone()
    .extract({ left: 30, top: 30, width: 1480, height: 1400 })
    .webp({ quality: 90 })
    .toFile('public/images/exterior/exterior-dusk.webp');

  console.log('Extracting floor plans...');
  // Page 3: Ground Floor Full & Site Plan
  await p3.clone()
    .extract({ left: 40, top: 120, width: 1100, height: 1480 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/ground-floor-site.webp');

  // Page 3: Ground Unit 001 (2 BHK, 1034 sqft)
  await p3.clone()
    .extract({ left: 1380, top: 170, width: 920, height: 860 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/ground-unit-001.webp');

  // Page 3: Ground Unit 002 (3 BHK, 1718 sqft)
  await p3.clone()
    .extract({ left: 1300, top: 1040, width: 1020, height: 580 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/ground-unit-002.webp');

  // Page 3: Full Page 3 Floor Plan
  await p3.clone()
    .webp({ quality: 90 })
    .toFile('public/images/floor-plans/ground-floor-plan.webp');

  // Page 4: Typical Floor Cluster (1st - 4th floor)
  await p4.clone()
    .extract({ left: 40, top: 170, width: 1120, height: 1420 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/typical-floor-cluster.webp');

  // Page 4: Typical Unit 001 (3 BHK, 1700 sqft)
  await p4.clone()
    .extract({ left: 1220, top: 220, width: 620, height: 1100 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/typical-unit-001.webp');

  // Page 4: Typical Unit 002 (2 BHK, 1183 sqft)
  await p4.clone()
    .extract({ left: 1680, top: 620, width: 650, height: 960 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/typical-unit-002.webp');

  // Page 4: Full Typical Floor Plan
  await p4.clone()
    .webp({ quality: 90 })
    .toFile('public/images/floor-plans/typical-floor-plan.webp');

  // Page 5: Typical Unit 003 (2 BHK, 1125 sqft)
  await p5.clone()
    .extract({ left: 70, top: 220, width: 950, height: 680 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/typical-unit-003.webp');

  // Page 5: Typical Unit 004 (2 BHK, 1084 sqft)
  await p5.clone()
    .extract({ left: 230, top: 880, width: 850, height: 750 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/typical-unit-004.webp');

  // Page 5: Basement Parking Plan
  await p5.clone()
    .extract({ left: 1300, top: 120, width: 1000, height: 1500 })
    .webp({ quality: 92 })
    .toFile('public/images/floor-plans/basement-parking-plan.webp');

  // Page 5: Full Page 5
  await p5.clone()
    .webp({ quality: 90 })
    .toFile('public/images/floor-plans/page-5-plans.webp');

  console.log('Extracting interior renders...');
  // Page 6: Living Room (Top render)
  await p6.clone()
    .extract({ left: 150, top: 0, width: 1950, height: 420 })
    .webp({ quality: 92 })
    .toFile('public/images/interiors/living-room.webp');

  // Page 6: Master Bedroom (Bottom-left render)
  await p6.clone()
    .extract({ left: 0, top: 1040, width: 1100, height: 640 })
    .webp({ quality: 92 })
    .toFile('public/images/interiors/master-bedroom.webp');

  // Page 6: Modular Kitchen (Bottom-right render)
  await p6.clone()
    .extract({ left: 1280, top: 960, width: 1100, height: 720 })
    .webp({ quality: 92 })
    .toFile('public/images/interiors/modular-kitchen.webp');

  // Page 6: Full interior showcase
  await p6.clone()
    .webp({ quality: 90 })
    .toFile('public/images/interiors/interiors-full.webp');

  console.log('Extracting portfolio projects from Page 7...');
  const colWidth = 205;
  const colGap = 20;
  const leftStart = 55;

  const projects = [
    { id: 'lotus-sapphire', row: 0, col: 0, name: 'Lotus Sapphire' },
    { id: 'spring-dale', row: 0, col: 1, name: 'Spring Dale' },
    { id: 'lotus-krish', row: 0, col: 2, name: 'Lotus Krish' },
    { id: 'nj-lotus-avenue', row: 0, col: 3, name: 'NJ Lotus Avenue' },
    { id: 'lotus-paradise-centre', row: 0, col: 4, name: 'Lotus Paradise Centre' },

    { id: 'lotus-paradise-plaza', row: 1, col: 0, name: 'Lotus Paradise Plaza' },
    { id: 'lotus-galaxy', row: 1, col: 1, name: 'Lotus Galaxy' },
    { id: 'lotus-adithya', row: 1, col: 2, name: 'Lotus Adithya' },
    { id: 'lotus-dev', row: 1, col: 3, name: 'Lotus Dev' },
    { id: 'lotus-dham', row: 1, col: 4, name: 'Lotus Dham' },

    { id: 'lotus-rovin', row: 2, col: 0, name: 'Lotus Rovin' },
    { id: 'lotus-aaradhya', row: 2, col: 1, name: 'Lotus Aaradhya' },
    { id: 'lotus-sudha', row: 2, col: 2, name: 'Lotus Sudha' },
    { id: 'lotus-paradise-elite', row: 2, col: 3, name: 'Lotus Paradise Elite' },
    { id: 'lotus-garden', row: 2, col: 4, name: 'Lotus Garden' },

    { id: 'lotus-pranav', row: 3, col: 0, name: 'Lotus Pranav' },
    { id: 'lotus-ananya', row: 3, col: 1, name: 'Lotus Ananya' },
    { id: 'lotus-adelaide', row: 3, col: 2, name: 'Lotus Adelaide' },
    { id: 'lotus-triangle', row: 3, col: 3, name: 'Lotus Triangle' },
    { id: 'lotus-atharva', row: 3, col: 4, name: 'Lotus Atharva' },

    { id: 'lotus-kapila', row: 4, col: 0, name: 'Lotus Kapila' },
    { id: 'lotus-ganga', row: 4, col: 1, name: 'Lotus Ganga' },
    { id: 'lotus-mangala', row: 4, col: 2, name: 'Lotus Mangala' },
    { id: 'lotus-legacy', row: 4, col: 3, name: 'Lotus Legacy' },
  ];

  const rowTops = [675, 850, 1025, 1205, 1380];
  const cardHeight = 145;

  for (const proj of projects) {
    const left = Math.round(leftStart + proj.col * (colWidth + colGap));
    const top = rowTops[proj.row];
    try {
      await p7.clone()
        .extract({ left: Math.max(0, left), top: top, width: colWidth, height: cardHeight })
        .webp({ quality: 85 })
        .toFile(`public/images/portfolio/${proj.id}.webp`);
    } catch (err) {
      console.warn(`Could not crop ${proj.id}:`, err.message);
    }
  }

  // Also full portfolio grid snapshot for reference
  await p7.clone()
    .extract({ left: 30, top: 650, width: 1130, height: 950 })
    .webp({ quality: 90 })
    .toFile('public/images/portfolio/portfolio-showcase.webp');

  console.log('All brochure assets cropped and organized successfully!');
}

cropAndOrganize().catch(console.error);
