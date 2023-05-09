class Person{
    age
    name

    constructor(name, age){
        this.name = name
        this.age = age
    }

    describe(){
        console.log(`My name's ${this.name} and I'm ${this.age}`)
    }
}

const person = {
    name: 'Felipe',
    age: 20,
    describe: function(){
        console.log(`My name's ${this.name} and I'm ${this.age}`)
    }
}

console.log(person.name)
person.height = 175
console.log(person['height'])

delete person.height
console.log(person)
person.describe()

const another_person = new Person('Marcelo', 15)
another_person.describe()
