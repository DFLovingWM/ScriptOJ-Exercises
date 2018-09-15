/**
 * 模式特点（以下0代表数字\d）：
 * 1. 小数部分(.00)可选
 * 2. 整数部分根据第一个逗号分隔：左边是1到3个字符，第1个不能为0；右边是0到N个(,000)
 * 3. 整数部分有特殊情况：0
 */
const USD_PATTERN = /^\$(0|[1-9]\d{0,2}(,\d{3})*)(\.\d{2})?$/
const isUSDFormat = str => USD_PATTERN.test(str)

exports.isUSDFormat = isUSDFormat
