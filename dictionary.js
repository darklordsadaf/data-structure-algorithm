class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Tony', '+965548660');
phoneBook.add('Steve', '+965668914');
phoneBook.add('Natasha', '+965566922');
console.log(phoneBook.dictionary);

const nat = phoneBook.get('Natasha');
console.log(nat);