import subtracao from '../subtracao'

describe('Testes de subtração', () =>{
    test('deve verificar o resultado de uma subtração', () => {
        expect(subtracao(6, 2)).toBeCloseTo(4)
        expect(subtracao(6, 8)).toBeCloseTo(-2)
        expect(subtracao(60, 2)).toBeCloseTo(58)
    })

    test('deve verificar o resultado incorreto de uma subtração', () => {
        expect(subtracao(6, 2)).not.toBe(5)
        expect(subtracao(6, 8)).not.toBe(-3)
        expect(subtracao(60, 2)).not.toBe(60)
    })
})
