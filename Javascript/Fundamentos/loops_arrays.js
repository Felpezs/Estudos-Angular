const students = ['Maria', 'Felipe', 'Joao']

students.push('Renan')
console.log(students[2])
students[4] = 'Joana'

console.log(students)
students.pop()
console.log(students)

console.log(students.length)

students.forEach(element => {
    console.log(element)
});