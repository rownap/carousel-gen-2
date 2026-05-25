require('ts-node').register({
  transpileOnly: true,
  compilerOptions: { module: 'commonjs', moduleResolution: 'node', esModuleInterop: true, jsx: 'react-jsx' }
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { gradientTemplates } = require('./components/templates-gradient.tsx');
const { brandingTemplates } = require('./components/templates-branding.tsx');
const { storytellingTemplates } = require('./components/templates-storytelling.tsx');
const { creativeTemplates } = require('./components/templates-creative.tsx');
const { photoTemplates } = require('./components/templates-photo.tsx');
const { signatureTemplates } = require('./components/templates-signature.tsx');
const { viralTemplates } = require('./components/templates-viral.tsx');

const mockProps = {
  slide: { text: 'Hello', subtext: 'World', emoji: '🌟' },
  index: 0, total: 3, accent: '#ff0000', accent2: '#00ff00', accent3: '#0000ff',
  width: 400, h: 400, font: 'Inter', titleSize: 24, pad: 20, brandName: 'Test',
  isFirst: true, isLast: false, bgImg: '', format: 'instagram'
};

const allTemplates = [
  gradientTemplates, brandingTemplates, storytellingTemplates, 
  creativeTemplates, photoTemplates, signatureTemplates, viralTemplates
];

let errors = [];

allTemplates.forEach((groupFn) => {
  try {
    const group = groupFn(mockProps);
    for (const [key, element] of Object.entries(group)) {
      try {
        const html = ReactDOMServer.renderToString(element);
        if (!html) errors.push(`Empty HTML for ${key}`);
      } catch (e) {
        errors.push(`Error rendering template ${key}: ${e.stack}`);
      }
    }
  } catch(e) {
    errors.push(`Error instantiating group: ${e.stack}`);
  }
});

if (errors.length > 0) {
  errors.forEach(e => console.error(e));
  process.exit(1);
} else {
  console.log('All templates rendered perfectly on the server.');
}
