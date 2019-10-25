const rotation = require('./rotation')

test('Rotacionar o array 3 vezes para a esquerda',() => {
  expect(rotation([3,8,9,7,6], 3)).toBe([7, 6, 3, 8, 9])
})