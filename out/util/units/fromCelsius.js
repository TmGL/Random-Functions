"use strict";
exports.__esModule = true;
function fromCelsius(num, convertTo) {
    num = Number(num);
    if (!convertTo)
        throw new Error('Unit to convert to must be provided');
    switch (convertTo.toLowerCase()) {
        case 'fahrenheit':
            return (num * 9 / 5) + 32 + '°F';
        case 'kelvin':
            return num + 273.15 + 'K';
        case 'celsuis':
            return num + '°C';
        default:
            throw new Error(JSON.stringify(convertTo) + ' is not a valid unit of temperature');
    }
}
exports["default"] = fromCelsius;
//# sourceMappingURL=fromCelsius.js.map