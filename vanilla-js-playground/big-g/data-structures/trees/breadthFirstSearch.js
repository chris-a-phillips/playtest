class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;

			while (true) {
				if (value === current.value) return undefined;
				if (value < current.value) {
					if (current.left === null) {
						current.left = newNode;
						return;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if (current.right === null) {
						current.right = newNode;
						return;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

    bfs() {
        let visited = []
        let queue = []
        let node = this.root

        queue.push(node)

        while(queue.length) {
            node = queue.shift()
            visited.push(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

        return visited
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.bfs());
