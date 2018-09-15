/**
 * TODO 
 * @param {*} url 
 */
const parseQueryString = (url) => {
  const QUERY_STRING_PATTERN = /^[^#]+?\?([^#]+)/
  const matchItem = url.match(QUERY_STRING_PATTERN)
  if (!matchItem) {
    return {}
  }
  const queryString = matchItem[1]
  const result = {}
  for (const kvString of queryString.split('&')) {
    let k, v
    const delimIndex = kvString.indexOf('=')
    if (delimIndex === -1) { // 不存在'='
      k = kvString
      v = null
    } else {
      k = kvString.slice(0, delimIndex)
      v = kvString.slice(delimIndex + 1)
    }
    result[k] = (v === undefined ? null : v)
  }
  return result
}

exports.parseQueryString = parseQueryString
