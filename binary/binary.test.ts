const f = require('./binary')

test('Obter a maior sequência de zeros', () => {
  expect(f.largestSequence('11001000')).toBe(3)
})

test('foo ii', () => {
  expect(f.largestSequence('1111')).toBe(0)
})

test('Obter a unica sequencia de zero', () => {
  expect(f.largestSequence('0')).toBe(1)
})

test('foo iiiii', () => {
  expect(f.toBinary(-1)).toBe('1')
})

test('foo iiiiiii', () => {
  expect(f.toBinary(25)).toBe('11001')
})

test('Converter o maior número do tipo inteiro para a base 2', () => {
  expect(f.toBinary(2147483647)).toBe('1111111111111111111111111111111')
})