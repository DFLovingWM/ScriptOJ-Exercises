/**
 * 该题目没什么好说的，只是发现系统上只支持“先行断言”、不支持“后行断言”
 * 所以我的解法是借助slice去除匹配到的":"和"."
 */

const extractStr = (str) => {
  let matchList = str.match(/:[^:\.]*\./g) || []
  return matchList.map(s => s.slice(1, -1))
}

exports.extractStr = extractStr