class Person {
    constructor(name) {
        this.name = name
    }

    toUpperCase(string) {
        return string.toUpperCase()
    }

    getName() {
        console.log(this.toUpperCase(this.name));
    }
}

module.exports = Person