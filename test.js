const fetchSheet = require('./')
const assert = require('assert')

async function test () {
  const result = await fetchSheet('https://docs.google.com/spreadsheets/d/1bbbCt7Kh4rvih3zy21V87AHFFhPY3o4RocXPEDqTdoc/edit?usp=sharing')
  console.log(result)
  assert(JSON.stringify(result) === '{"first col":{"first row":"one","second row":"four","third row":"seven"},"second col":{"first row":"two","second row":"five","third row":"eight"},"third col":{"first row":"three","second row":"six","third row":null}}')
}

test()
