function getFactorial(n) {
  if(typeof n !== 'number'){
    throw new TypeError()
  }
  
  let factorial = 1

  for (let i = n; i >= 1; i--) {
    factorial *= i
  }
  
  return factorial
}

module.exports = getFactorial