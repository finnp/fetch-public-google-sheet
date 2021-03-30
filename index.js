const getKeyForUrl = require('google-spreadsheets-key-parser')
const got = require('got')

async function fetchSheet (url) {
  const { key } = getKeyForUrl(url)

  const fetchUrl = buildUrl(key)

  const raw = await fetch(fetchUrl)

  const result = format(raw)

  return result
}

module.exports = fetchSheet

function buildUrl (key) {
  const query = encodeURIComponent('select *')
  return `https://docs.google.com/a/google.com/spreadsheets/d/${key}/gviz/tq?tq=${query}&gid=0`
}

async function fetch (url) {
  const { body } = await got(url)
  const json = parse(body)

  if (json.errors) {
    throw new Error(json.errors[0].detailed_message)
  }
  return json.table
}

function format (raw) {
  const data = {}
  const columnKeys = getColumnKeys(raw)
  columnKeys.forEach(key => {
    data[key] = {}
  })
  const rows = raw.rows.map(a => a.c).slice(1)

  rows.forEach(row => {
    const rowKey = row[0]?.v
    columnKeys.forEach(key => {
      data[key][rowKey] = {}
    })
    row.slice(1).forEach((cell, index) => {
      const value = cell?.v
      const columnKey = columnKeys[index]
      data[columnKey][rowKey] = value
    })
  })
  return data
}

function parse (response) {
  const startLength = '/*O_o*/\ngoogle.visualization.Query.setResponse('.length
  const endLength = ');'.length

  return JSON.parse(
    response.substring(startLength, response.length - endLength)
  )
}

function getColumnKeys (raw) {
  return raw.rows
    .map(a => a.c)[0]
    .slice(1)
    .map(({ v }) => v)
}
