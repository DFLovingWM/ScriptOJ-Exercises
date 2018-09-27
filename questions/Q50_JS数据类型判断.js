/**
 * 利用toString
 */
var type = obj => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

/**
 * 利用constructor
 */
var type = obj => {
  if (typeof obj !== 'object') return typeof obj
  if (obj === null) return 'null'
  return Object.getPrototypeOf(obj).constructor.name.toLowerCase()
}

exports.type = type
