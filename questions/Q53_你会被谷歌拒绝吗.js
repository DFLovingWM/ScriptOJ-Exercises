/**
 * 该题有两种思路：
 * 1、正儿八经：数组 => 二叉树 => 反转 => 数组
 * 2、trick：
 */

/**
 * 二叉树结点
 */
var BinaryNode = class {
  constructor (val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

/**
 * 二叉树
 */
var BinaryTree = class {
  constructor (root) {
    this.root = root
  }

  /**
   * 从数组构造出一个二叉树
   */
  static from (arr) {
    arr = [...arr] // 注意：copy一份，为了不影响传入的数组
    let queue = []
    let root = new BinaryNode(arr.shift())
    queue.push(root)
    while (queue.length && arr.length) {
      debugger
      let curNode = queue.shift()
      if (arr.length) {
        curNode.left = new BinaryNode(arr.shift())
        queue.push(curNode.left)
      }
      if (arr.length) {
        curNode.right = new BinaryNode(arr.shift())
        queue.push(curNode.right)
      }
    }
    return new BinaryTree(root)
  }

  /**
   * 反转。借助外部递归函数
   */
  invert () {
    invert(this.root)
    return this // 为了链式调用
  }

  /**
   * 转化为数组，即BFS
   */
  serialize () {
    let result = []
    let queue = []
    queue.push(this.root)
    while (queue.length) {
      let node = queue.shift()
      if (!node) {
        result.push(null) // 空结点，需要输出null
        continue
      } 
      result.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return result
  }
}

/**
 * 递归函数：反转某个二叉树结点
 * 先递归反转子结点，再反转自身
 */
function invert (node) {
  if (!node) return
  invert(node.left)
  invert(node.right)
  let [leftNode, rightNode] = [node.right, node.left]
  node.left = leftNode
  node.right = rightNode
}

var invertTree = arr => BinaryTree.from(arr).invert().serialize()


// 测试代码
console.log( invertTree([4, 3, 2, 7, 1, 2, 3, 6, 5, 9, null, null, null, null, null]) )

/**
 * trick法
 */
var invertTree = tree => tree.reduce((p, c, i) => {
  const ti = (i + 1).toString(2).length
  p[ti] = p[ti] || []
  p[ti].push(c)
  return p
}, []).map(x => x.reverse()).reduce((p, c) => [...p, ...c], [])
