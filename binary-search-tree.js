class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //if tree is empty make val root of tree
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    //otherwise find the right spot
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        }
        current = current.left;
      }

      else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right)
    }

    else if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    if (current.val === val) {
      return current;
    }

    while (current !== null) {
      if (val > current.val) {
        current = current.right;
      }
      else if (val < current.val) {
        current = current.left;
      }
      else {
        return current;
      }
    }
    return undefined;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) return undefined;

    if (val > current.val) {
      return this.findRecursively(val, current.right);
    }

    else if (val < current.val) {
      return this.findRecursively(val, current.left);
    }

    else return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  // myself, traverse left, traverse right

  dfsPreOrder() {
    let outputArr = [];
    let current = this.root;

    function traverse(node) {
      outputArr.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return outputArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  // traverse left, myself, traverse right

  dfsInOrder() {
    let outputArr = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      outputArr.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return outputArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
  // traverse left, traverse right, myself

  dfsPostOrder() {
    let outputArr = [];
    let current = this.root;
    
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      outputArr.push(node.val);
    }

    traverse(current);
    return outputArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  // bfs = breadth first search, level by level

  bfs() {
    let current = this.root;
    let queue = [];
    let outputArr = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      outputArr.push(current.val);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return outputArr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
