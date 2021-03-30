const fetchSheet = require('./')

async function test () {
  const result = await fetchSheet('https://docs.google.com/spreadsheets/d/1bbbCt7Kh4rvih3zy21V87AHFFhPY3o4RocXPEDqTdoc/edit?usp=sharing')
  console.log(result)

  const swopped = await fetchSheet('https://docs.google.com/spreadsheets/d/1bbbCt7Kh4rvih3zy21V87AHFFhPY3o4RocXPEDqTdoc/edit?usp=sharing', { indexBy: 'column' })
  console.log(swopped)
}

test()
