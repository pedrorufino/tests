const f = require('./luhn')

test('Dobrar o valor', () => {
  expect(f.sumDoubbleDigit(2)).toBe(4)
})

test('Dobrar o valor, se o produto tiver digitos, separa-los e soma-los', () => {
  expect(f.sumDoubbleDigit(22)).toBe(8)
})

test('Dobrar o valor', () => {
  expect(f.luhnAlgorithm('4000 1234 5678 9314')).toBeTruthy()
})

test('Dobrar o valor', () => {
  expect(f.luhnAlgorithm('4000 1234 5678 9010')).toBeFalsy()
})

test('Dobrar o valor', () => {
  expect(f.luhnAlgorithm('4000.1234.5678.931-4')).toBeTruthy()
})