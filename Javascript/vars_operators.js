//Grade point average

const st_grade = 10
const sec_grade = 6
const td_grade = 3

const mean = (st_grade + sec_grade + td_grade)/3

console.log(`Mean = ${mean}`)

if(mean > 7)
    console.log("OK")
else if(mean <= 7 && mean >= 5)
    console.log("Test")
else
    console.log("Fail")

