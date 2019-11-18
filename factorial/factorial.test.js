const getFactorial = require('./factorial')

describe('Happy Path', () => {
  test('getFactorial deve ser uma função', () => {
    expect(getFactorial).toBeInstanceOf(Function)
  })

  test('A função deve retornar um número inteiro positivo', () => {
    expect(typeof getFactorial(2)).toBe('number')
  })

  test('getFactorial(3) deve retornar 6', () => {
    const actual = getFactorial(3)
    const expected = 6

    expect(actual).toBe(expected)
  })

})

describe('Unhappy Path', () => {
  // Lançar typeerror, caso argumanto passado seja diferente de número
  test('getFactorial() deve disparar um TypeError', () => {
    try {
      getFactorial()
    } catch (error) {
      expect(error.name).toBe('TypeError')
    }
  })
  // verificar se a mensagem de erro corresponde a especificada no teste

  //  retornar 1 caso seja passad o 0 [

})