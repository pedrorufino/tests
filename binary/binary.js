function getLargestSequence(n) {
  let binary = toBinary(n)
  let largestSequence = getZeroSequences(binary)

  return largestSequence
}

function toBinary(n) {
  let binary = ''

  while (n !== 1) {
    binary += n % 2
    n = Math.floor(n / 2)
  }

  binary += 1;

  binary = binary.split('').reverse().join('');

  return binary
}

function getZeroSequences(binary) {
  let zeroSequences = String(binary).split(/[^0]/)

  // Obter somente valores truthy, neste caso a string '0'
  zeroSequences = zeroSequences.filter(seq => seq)

  if (zeroSequences.length == 0) {
    return 0
  } else {
    let largest = zeroSequences.reduce((acc, el) => acc.length >= el.length ? acc : el)

    return largest.length
  }
}

module.exports = {
  toBinary,
  getZeroSequences
}