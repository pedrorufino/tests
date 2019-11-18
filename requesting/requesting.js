function fetchTeam() {
  const axios = require('axios')
  return axios
    .get('https://api.myjson.com/bins/mkc0a')
    .then(res => res.data)
    .catch(err => err)
}

module.exports = fetchTeam