// const friends = []
// friends.push(45)
// friends.push(85)
// friends.push(123)
// console.log(friends)
// const getOne = friends.pop()
// console.log(getOne)
// console.log(friends)
// const getTwo = friends.pop()
// console.log(getTwo)
// console.log(friends)



class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Rahman")
guest.add("Zaman")
guest.add("Kaman")
console.log(guest.stack);
const speaker = guest.remove();
console.log(speaker);
console.log(guest.stack);