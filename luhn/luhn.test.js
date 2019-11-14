const f = require('./luhn')

test('Dobrar o valor', () => {
  expect(f.sumDoubbleDigit(2)).toBe(4)
})

test('Dobrar o valor, se o produto tiver digitos, separa-los e soma-los', () => {
  expect(f.sumDoubbleDigit(22)).toBe(8)
})

test('Testar número de cartão válido', () => {
  expect(f.luhnAlgorithm('4000 1234 5678 9314')).toBeTruthy()
})

test('Testar número de cartão inválido', () => {
  expect(f.luhnAlgorithm('4000 1234 5678 9010')).toBeFalsy()
})

test('Testar número de cartão válido sem a normalização correta', () => {
  expect(f.luhnAlgorithm('4000.1234.5678.931-4')).toBeTruthy()
})