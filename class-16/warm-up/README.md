# Warm Up - Breadth First Traversal of a K-ary Tree

Given the root node of a k-ary tree, traverse the tree using a breadth first traversal method.

## Data Model

```javascript

class Node {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k);
  }
}

class Tree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }
}

```
