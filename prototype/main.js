const person = new Object({
        name: `Maxim`,
        age: 33,
        greet: function(){
            console.log(`Grret`)
        }
})

Object.prototype.sayhello = function(){
    console.log(`helllo`)
}


const lena = Object.create(person)
lena.name = `Elena`

// строки и числа тоже объекты можно добавлять
// прототипы в объекты
// прототип - функция по объекту