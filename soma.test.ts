import soma from './soma'

describe(    'Teste de soma', () => { 
    test ('deve verificar o resultado de uma soma', () => {
        expect(soma (3, 8)).toBe(11)
    }) 

    test('deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 8)).not.toBe(12)
    })

})
