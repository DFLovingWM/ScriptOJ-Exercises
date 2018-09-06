/**
 * 思路： 重点是document.querySelectorAll('*')获取所有元素。然后取tagName，去重
 * 
 * 获取全部元素，类比几个方法：
 * 1.document.querySelectorAll('*')，返回一个(static的)NodeList
 * 2.document.getElementsByTagName('*')，返回一个HTMLCollection
 * 3.document.all，返回一个HTMLAllCollection
 */

const getPageTags = () => [...new Set(Array.prototype.map.call(document.querySelectorAll('*'), node => node.tagName.toLowerCase()))]
