import divisao from '../divisao'

describe ('Teste de divisão', () => {
    test ('deve verificar o resultado da divisão', () => {
        expect(divisao(6.6, 2)).toBeCloseTo(3.3)
        expect(divisao(8, 8)).toBeCloseTo(1)
        expect(divisao(60, 2)).toBeCloseTo(30)
    })

    test ('deve verificar o resultado incorreto da divisão', () => {
        expect(divisao(6, 2)).not.toBeCloseTo(20)
    })
})