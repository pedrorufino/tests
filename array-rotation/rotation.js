function rotation(arr, k) {

  while (k != 0) {
    let aux = arr.shift()
    arr.push(aux)
    k--
  }
  return arr
}

module.exports = rotation