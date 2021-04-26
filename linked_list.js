class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        // this.previous = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.value === value) {
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(1500);
const numbers = new LinkedList(head);
numbers.add(98);
numbers.add(66);
numbers.add(77);
console.log(JSON.stringify(numbers));
const remove = numbers.remove(66);
console.log(JSON.stringify(numbers));
