class Node {
	constructor(data) {
		// a Node starts with a given data property
		this.data = data;
		// a Node also has a .next property initialized as null
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		// a Linked List starts with a "head" property initialized as null
		this.head = head;
	}
	appendNode(data) {
		// creates a new node with the given data and adds it to back of the list
		let node = new Node(data);

		if (!this.head) {
			this.head = node;
			return this.head;
		}

		let tail = this.head;
		while (tail.next !== null) {
			tail = tail.next;
		}
		tail.next = node;
		return this.head;
	}
	prependNode(data) {
		// creates a new node with the given data and adds it to the front of the list
		let node = new Node(data);

		node.next = this.head;
		this.head = node;
	}
	pop() {
		// removes the last node from the list and returns it
		let tail = this.head;

		while (tail.next.next !== null) {
			tail = tail.next;
		}

		let last = tail.next;
		tail.next = null;
		return last;
	}
	removeFromFront() {
		// remove the head node from the list and return it
		// the next node in the list is the new head node
		let temp = this.head.next;
		let removed = this.head;
		removed.next = null;
		this.head = temp;
		return removed;
	}
	insertAt(X, data) {
		// insert a new node into the list with the given data
		// place it after X nodes in the list
		// if X exceeds the bounds of the list, put the node at the end
		// insertAt(0, 7) would add the new node as the head
        const node = new Node(data);
		
        if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (X === 0) {
            node.next = this.head
			this.head = node;
			return node
		}

		const previous = this.getAt(X - 1);
		node.next = previous.next;
		previous.next = node;

		return node
	}
	removeAt(X) {
		// remove the Xth node from the list, considering 0 to be the first node
		// return the node that has been removed
	}
	search(data) {
		// searches the list for a node with the given data
		// if it is found, return the "index" of the node, considering 0 to be the first node
		// if not, return false
	}
	sort() {
		// sort the Linked List in ascending order of data values
	}
	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		return null;
	}
}

const list = new LinkedList();

list.appendNode(1);
list.appendNode(2);
list.appendNode(3);
list.appendNode(4);
list.appendNode(5);
list.appendNode(6);
list.appendNode(7);
list.appendNode(8);

list.getAt(0);

console.log(list);
