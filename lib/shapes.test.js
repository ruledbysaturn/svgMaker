const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('renders triangle with color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })

    test('renders trianglee with default color', () => {
        const triangle = new Triangle();
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black" />');
    })

});

describe('Circle', () => {
    test('renders circle with color', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    })

    test('renders circle with default color', () => {
        const circle = new Circle();
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black" />');
    })
});

describe('Square', () => {
    test('renders square with color', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="blue" />');
    })

    test('renders square with default color', () => {
        const square = new Square();
        expect(square.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="black" />');
    })

});