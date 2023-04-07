'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

  includes(value) {
    // if (current.value === value) {

    // }
  }

  append() {}
  insert() {}
}

let linkedList = new LinkedList();

linkedList.head = new Node('knife');
linkedList.head.next = new Node('medkit');
linkedList.head.next.next = new Node('sandwich');

// console.log('our current linked list: ', linkedList);

linkedList.traverse();

module.exports = LinkedList;
