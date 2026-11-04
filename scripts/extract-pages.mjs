import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js';
import { createCanvas, DOMMatrix, ImageData } from '@napi-rs/canvas';

if (typeof globalThis.DOMMatrix === 'undefined') {
  globalThis.DOMMatrix = DOMMatrix;
}
if (typeof globalThis.ImageData === 'undefined') {
  globalThis.ImageData = ImageData;
}

const canvasFactory = {
  create(width, height) {
    const canvas = createCanvas(width, height);
    return {
      canvas,
      context: canvas.getContext('2d'),
    };
  },
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  },
  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
};

async function renderPdfPages() {
  const outputDir = path.resolve('./temp-pdf-pages');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync('Lotus Signature Brochure.pdf'));
  const loadingTask = pdfjsLib.getDocument({
    data,
    standardFontDataUrl: 'node_modules/pdfjs-dist/standard_fonts/',
    cMapUrl: 'node_modules/pdfjs-dist/cmaps/',
    cMapPacked: true,
  });

  const pdfDocument = await loadingTask.promise;
  console.log(`PDF loaded. Total pages: ${pdfDocument.numPages}`);

  for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
    const page = await pdfDocument.getPage(pageNum);
    const viewport = page.getViewport({ scale: 2.0 });

    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext('2d');

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
      canvasFactory: canvasFactory,
    };

    await page.render(renderContext).promise;
    const buffer = canvas.toBuffer('image/png');
    const pagePath = path.join(outputDir, `page-${pageNum}.png`);
    fs.writeFileSync(pagePath, buffer);
    console.log(`Saved page ${pageNum} (${viewport.width}x${viewport.height}) to ${pagePath}`);
  }
}

renderPdfPages().catch(err => {
  console.error('Error rendering PDF:', err);
  process.exit(1);
});
