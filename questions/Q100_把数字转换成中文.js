/**
 * 1.三个重点：
 * (1)小单位：'', '十', '百', '千'
 * (2)大单位：'', '万', '亿', '兆'
 * (3)位数翻译：零一二三四五六七八九
 * 
 * 2.思路：
 * (1)可能需要给上一位加大单位并重置零标志
 * (2)遇0不读，但需要设置零标志，表示前面有0，下一次要读0
 * (3)可能需要跟上一位之间，读一个'零'
 * (4)最后才读当前位、小单位
 * 
 * 3.思路不是一下子想出来，而是根据测试数据一步步推出来的，不难
 */

const smallUnits = ['', '十', '百', '千']
const chineseChars = '零一二三四五六七八九'.split('')
const bigUnits = ['', '万', '亿', '兆']

const toChineseNum = (num) => {
  if (num === 0) {  // 特殊情况
    return '零'
  }

  const str = String(num)
  const length = str.length
  let hadZero = false // 表示前面是否有0
  let resultArr = []
  for (let i = 0; i < length; ++i) {
    let n = Number(str[i])

    // 可能需要给上一批加上大单位
    let reverseIndex = length - i - 1
    if (reverseIndex % 4 === 3 && i > 0) {
      resultArr.push(bigUnits[(reverseIndex + 1) / 4])
      hadZero = false // 新一批开始，重置前面零的个数
    }

    if (n === 0) {  // 如果是0，则暂时不读这一位
      hadZero = true
      continue
    }

    // 如果前面有0，而当前位不是0，则先读0，再处理该位
    if (hadZero && n !== 0) {
      resultArr.push('零')
      hadZero = false
    }

    // 读当前位
    resultArr.push(chineseChars[n])
    resultArr.push(smallUnits[reverseIndex % 4])
  }
  return resultArr.join('')
}

exports.toChineseNum = toChineseNum