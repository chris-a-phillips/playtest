class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	// just to see reverse in action
	print() {
		let arr = []
		let current = this.head
		while(current) {
			arr.push(current.val)
			current = current.next
		}
		console.log(arr)
	}

	reverse() {
		// create a variable called node and initialize it to the head property
		let currentNode = this.head
		// swap the head and the tail
		this.head = this.tail
		this.tail = currentNode

		// create a variable called next
		// create a variable called prev
		let next = null
		let prev = null

		// loop through the list
		for (let i = 0; i < this.length; i++) {
			// set next to be the next property on whatever node is
			next = currentNode.next
			// set the next property on the node to be whatever prev is
			currentNode.next = prev
			// set prev to be the value of the node variable
			prev = currentNode
			// set the node variable to be the value of the next variable
			currentNode = next
		}
		return this
	}

}

const list = new SinglyLinkedList();

list.push('hello');
list.push('goodbye');
list.push('wassup');
list.push('easy')
list.push('breezy')

console.log(list.print());
list.reverse()
console.log(list.print());
