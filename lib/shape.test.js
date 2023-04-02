const { drawCircle, drawTriangle, drawSquare } = require('./shape.js');

const createMockDwg = () => {
  const elements = [];
  return {
    circle: jest.fn(attrs => elements.push({ type: 'circle', attrs })),
    polygon: jest.fn(attrs => elements.push({ type: 'polygon', attrs })),
    rect: jest.fn(attrs => elements.push({ type: 'rect', attrs })),
    tostring: () => {
      return elements
        .map(e => {
          const attrs = Object.entries(e.attrs)
            .map(([name, value]) => `${name}="${value}"`)
            .join(' ');
          return `<${e.type} ${attrs}/>`;
        })
        .join('');
    },
  };
};

test('drawCircle creates a circle with the correct attributes', () => {
  const dwg = createMockDwg();
  drawCircle(dwg, 'red');
  expect(dwg.circle).toHaveBeenCalledTimes(1);
  expect(dwg.circle).toHaveBeenCalledWith({
    cx: 50,
    cy: 50,
    r: 50,
    fill: 'red',
  });
});

test('drawTriangle creates a triangle with the correct attributes', () => {
  const dwg = createMockDwg();
  drawTriangle(dwg, 'green');
  expect(dwg.polygon).toHaveBeenCalledTimes(1);
  expect(dwg.polygon).toHaveBeenCalledWith({
    points: '0,100 86.6,50 0,0',
    fill: 'green',
  });
});

test('drawSquare creates a square with the correct attributes', () => {
  const dwg = createMockDwg();
  drawSquare(dwg, 'blue');
  expect(dwg.rect).toHaveBeenCalledTimes(1);
  expect(dwg.rect).toHaveBeenCalledWith({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: 'blue',
  });
});