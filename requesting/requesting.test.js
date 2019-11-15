const f = require('./requesting')

test('Espera uma lista de 3 elementos', () => {
  expect.assertions(1)
  return f.fetchTeam().then( data => {
    expect(data.teams.length).toBe(3)
  })
})

test('Espera que lista contenha somente objetos', () => {
  expect.assertions(1)
  return f.fetchTeam().then( data => {
    const list = data.teams
    expect(list.every(e => typeof(e) == "object")).toBeTruthy()
  })
})