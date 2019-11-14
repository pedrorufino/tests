function luhnAlgorithm(number) {
  number = number.replace(/\D/g, '')
  number = Array.from(number).map(Number).reverse()

  number.forEach((el, i) => {
    return i % 2 == 1 ? number[i] = sumDoubbleDigit(number[i]) : null
  })

  let total = number.reduce((acc, el) => acc += el)

  return (total % 10 == 0)
}


function sumDoubbleDigit(n) {
  n *= 2
  return n >= 10 ? String(n).split('').map(Number).reduce((acc, el) => acc += el) : n
}

module.exports = {
  luhnAlgorithm,
  sumDoubbleDigit
}