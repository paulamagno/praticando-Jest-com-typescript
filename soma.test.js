const soma = require ('./soma.js');

test ('deve verificar o resultado de uma soma', () => {
    expect(soma (3, 8)).toBe(11)
})