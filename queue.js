class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}


const avengers = new Queue();
avengers.enqueue("Tony");
avengers.enqueue("Steve");
avengers.enqueue("Wanda");
avengers.enqueue("Sam");

console.log(avengers.queue);

const civilWar = avengers.dequeue();
console.log(civilWar);
console.log(avengers.queue);