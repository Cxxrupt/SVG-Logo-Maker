function generateSvg(text, textColor, shape, shapeColor) {
  let shapeSvg;
  switch (shape) {
    case 'circle':
      shapeSvg = `<circle cx="50%" cy="50%" r="40%" fill="${shapeColor}"/>`;
      break;
    case 'triangle':
      shapeSvg = `<polygon points="50%,10% 10%,90% 90%,90%" fill="${shapeColor}"/>`;
      break;
    case 'square':
      shapeSvg = `<rect x="10%" y="10%" width="80%" height="80%" fill="${shapeColor}"/>`;
      break;
    default:
      throw new Error(`Unsupported shape: ${shape}`);
  }

  return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${textColor}" font-size="48">${text}</text>
  </svg>`;
}

module.exports = {
  generateSvg,
};