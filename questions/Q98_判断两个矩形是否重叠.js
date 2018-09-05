/**
 * 思路：
 * - （旧）如果r1的4个点都不在r2中，就不会重叠。但这个思路有重复判断的地方。
 * - （新）如果水平上重复、且竖直上也重复，就发生重叠。
 * 
 * 小坑：
 * 题目的要求是就算是贴着，也算重叠，所以比较时记得加上"="
 */

const isOverlap = (rect1, rect2) => isXOverlap(rect1, rect2) && isYOverlap(rect1, rect2)

/**
 * 判断水平上是否重叠
 * 即：r1的x是否落在r2的横边上，反之亦然
 */
const isXOverlap = (rect1, rect2) => (rect1.x >= rect2.x && rect1.x <= rect2.x + rect2.width) ||
                                     (rect2.x >= rect1.x && rect2.x <= rect1.x + rect1.width)

/**
 * 判断竖直上是否重叠
 * * 即：r1的y是否落在r2的竖边上，反之亦然
 */
const isYOverlap = (rect1, rect2) => (rect1.y >= rect2.y && rect1.y <= rect2.y + rect2.height) ||
                                     (rect2.y >= rect1.y && rect2.y <= rect1.y + rect1.height)

exports.isOverlap = isOverlap
