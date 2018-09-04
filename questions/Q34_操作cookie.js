/**
 * document.cookie知识点：
 * 1.给document.cookie赋值，其实是增加/修改了一个KV对
 * 2.document.cookie的值只包含众多的KV对本身，不包含expires等额外信息
 * 3.若想要删除一个cookie，只需要给该cookie的expires字段一个过去时间的GMT格式字符串
 */
const cookieJar = {
  /**
   * expires字段表示KV的过期时间，采用Date对象的GMT格式
   */
  set (name, value, days) {
    let cookieStr = `${name}=${value};`
    if (days) {
      const date = new Date()
      date.setDate(date.getDate() + days)
      cookieStr += ` expires=${date.toGMTString()}`
    }
    document.cookie = cookieStr 
  },

  /**
   * 寻找KV对的过程，主要是对字符串的操作。
   * 方法：
   * - KV对匹配
   * - indexOf直接找key
   * - 正则表达式（有点难度）
   */
  get (name) {
    for (const kv of document.cookie.split(';')) {
      let [key, value] = kv.split('=')
      if (!key || !value) continue
      key = key.trim()
      value = value.trim()
      if (key === name && value) {
        return value
      }
    }
    return ''
  },

  /**
   * 给一个过去的时间（给你一张过去的CD...）
   */
  remove (name) {
    if (this.get(name) !== null) {
      this.set(name, '', -1)
    }
  }
}
