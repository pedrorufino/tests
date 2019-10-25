function toBinary(n: number): any {

  let binary = ''

  while (n !== 1) {
    binary += n % 2
    n = Math.floor(n / 2)
  }
  binary += 1;

  binary = binary.split('').reverse().join('');

  return largestSequence(binary)
}

function largestSequence(binary: string): number {
  let zeroSequences = String(binary).split('1')

  // Obter somente valores truthy, neste caso a string '0'
  zeroSequences = zeroSequences.filter(seq => seq)

  if (zeroSequences.length == 0) {
    return 0
  }

  else {
    let total = zeroSequences.reduce((acc, el) => {
      return acc.length >= el.length ? acc : el
    })

    return total.length
  }
}

toBinary(100)

module.exports = {
  toBinary, largestSequence
}
