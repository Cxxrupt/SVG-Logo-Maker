function drawCircle(dwg, color) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttributeNS(null, 'cx', '150');
  circle.setAttributeNS(null, 'cy', '100');
  circle.setAttributeNS(null, 'r', '50');
  circle.setAttributeNS(null, 'fill', color);
  dwg.appendChild(circle);
}

function drawTriangle(dwg, color) {
  const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  triangle.setAttributeNS(null, 'points', '100,150 200,150 150,50');
  triangle.setAttributeNS(null, 'fill', color);
  dwg.appendChild(triangle);
}

function drawSquare(dwg, color) {
  const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  square.setAttributeNS(null, 'x', '100');
  square.setAttributeNS(null, 'y', '50');
  square.setAttributeNS(null, 'width', '100');
  square.setAttributeNS(null, 'height', '100');
  square.setAttributeNS(null, 'fill', color);
  dwg.appendChild(square);
}

module.exports = {
  drawCircle,
  drawTriangle,
  drawSquare,
};
