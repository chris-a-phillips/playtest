class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySeachTree {
	constructor() {
		this.root = null;
	}

	// Insert a value as a node in the BST
	insert(value) {
		let newNode = new Node(value);

		// If root empty, set new node as the root
		if (!this.root) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	// helper function
	insertNode(root, newNode) {
		// if the new value is less than this value
		if (newNode.value < root.value) {
			// if there isn't a left node currently, add a new one to the left
			if (!root.left) {
				root.left = newNode;
				// if there is a left node continue down the tree doing this same insertNode function
			} else {
				this.insertNode(root.left, newNode);
			}
			// if the new value is more than this value
		} else {
			// if there isn't a right node currently, add a new one to the right
			if (!root.right) {
				root.right = newNode;
				// if there is a right node continue down the tree doing this same insertNode function
			} else {
				this.insertNode(root.right, newNode);
			}
		}
	}

	// Remove a node with the value passed
	remove(value) {
		if (!this.root) {
			return 'Tree is empty!';
		} else {
			this.removeNode(this.root, value);
		}
	}

	// helper function
	removeNode(root, value) {
		if (!root) {
			return null;
		}

		// If value is less than root value, go to the left subtree
		if (value < root.value) {
			root.left = this.removeNode(root.left, value);
			return root;
			// If value is greater than root value, go to the right subtree
		} else if (value > root.value) {
			root.right = this.removeNode(root.right, value);
			return root;
			// If we found the value, remove the node
		} else {
			// If no child nodes, just remove the node
			if (!root.left && !root.right) {
				root = null;
				return root;
			}

			// If one child (left)
			if (root.left) {
				root = root.left;
				return root;
				// If one child (right)
			} else if (root.right) {
				root = root.right;
				return root;
			}

			// If two child nodes (both)
			// Get the minimum of the right subtree to ensure we have valid replacement
			let minRight = this.findMinNode(root.right);
			root.value = minRight.value;

			// Make sure we remove the node that we replaced the deleted node
			root.right = this.removeNode(root.right, minRight.value);
			return root;
		}
	}

	findMinNode(root) {
		if (!root.left) {
			return root;
		} else {
			return this.findMinNode(root.left);
		}
	}

	// Return boolean value depending on the existence of the value in the tree
	search(value) {
		if (!this.root) {
			return 'Tree is empty';
		} else {
			return Boolean(this.searchNode(this.root, value));
		}
	}

	searchNode(root, value) {
		if (!root) {
			return null;
		}

		if (value < root.value) {
			return this.searchNode(root.left, value);
		} else if (value > root.value) {
			return this.searchNode(root.right, value);
		}

		return root;
	}
}


const testing = new BinarySeachTree

testing.insert(17)
testing.insert(4)
testing.insert(2)
testing.insert(21)
testing.insert(40)

console.log(testing.searchNode(4, 2))