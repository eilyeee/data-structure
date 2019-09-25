/**
 * 1、单链表插入、删除、查找操作
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }
  // 根据value查找节点
  findItem(item) {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }
  // 根据index查找节点，下标从0开始
  findIndex(index) {
    let currentNode = this.head.next
    let i = 0
    while (currentNode !== null && i !== index) {
      currentNode = currentNode.next
      i++
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }
  // 向链表末尾追加节点
  append(newElement) {
    const newNode = new Node(newElement)
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }
  // 向指定元素后面插入
  insert(newElement, element) {
    const currentNode = this.findItem(element)
    if (currentNode === -1) {
      console.log('未找到插入位置')
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  // 查找前一个
  findPrev(item) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return -1
    }
    return currentNode
  }
  // 根据值删除
  remove(item) {
    const prevNode = this.findPrev(item)
    if (prevNode === -1) {
      console.log('未找到元素')
      return
    }
    prevNode.next = prevNode.next.next
  }
  // 遍历
  display() {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
}
let list = ['a', 'b', 'c', 'd']
const linkedList = new LinkedList()
console.info('-----------init-----------')
list.forEach(item => {
  linkedList.append(item)
})
linkedList.display()
// a->b->c->d
console.info('----------insert-----------')
linkedList.insert('e', 'a')
linkedList.insert('f', 'd')
linkedList.display()
// a->e->b->c->d->f
console.info('----------remove-----------')
linkedList.remove('c')
linkedList.display()
// a->e->b->d->f
console.info('----------findItem-----------')
linkedList.findItem('b')
console.info('----------findIndex-----------')
linkedList.findIndex(2)
console.info('----------与头节点同值元素测试-----------')
linkedList.insert('head', 'b')
linkedList.display()
linkedList.findPrev('head')
linkedList.remove('head')
console.info('------------------')
linkedList.display()
