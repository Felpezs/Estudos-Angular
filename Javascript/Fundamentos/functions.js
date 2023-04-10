function counter(value){
    console.log(value)
    if(value === 25)       
        return value

    value += 1
    counter(value)
}

//Main code
(function (){
    console.log('Executed Once\n')
    counter(1)
    console.log('\n');
    counter = (value) => {
        if(value === 10)
            return value
        value += 2
        console.log(value)
        counter(value)
    }

    counter(2);
})();