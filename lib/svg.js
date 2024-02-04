const { Triangle, Circle, Square } = require('./shapes');

const generateSVG = (text, textColor, shapeColor, shapeType) => {

    let shape = '';
    switch (shapeType) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        default:
            throw new Error('Invalid shape type');
    }

    shape.setColor(shapeColor);

    const shapeSVG = shape.render();

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="50%" y="50%" fill="${textColor}" font-size="30" text-anchor="middle" font-family="Arial">${text}</text>
    </svg>
`;
    return svgContent;
};

module.exports = { generateSVG };