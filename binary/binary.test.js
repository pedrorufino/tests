const f = require('./binary')

test('Converter número da base decimal para a base 2', () => {
  expect(f.toBinary(1)).toBe('1')
})

test('Converter número da base decimal para a base 2', () => {
  expect(f.toBinary(25)).toBe('11001')
})

test('Converter o maior número do tipo inteiro para a base 2', () => {
  expect(f.toBinary(2147483647)).toBe('1111111111111111111111111111111')
})
test('Obter a maior sequência de zeros', () => {
  expect(f.getZeroSequences('11001000')).toBe(3)
})

test('Retornar 0 se não houver zeros', () => {
  expect(f.getZeroSequences('1111')).toBe(0)
})

test('Obter um unico digito, se não houver uma sequência', () => {
  expect(f.getZeroSequences('0')).toBe(1)
})
