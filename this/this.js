function hello() {
    console.log(`Hello`, this)
}


// const person = {
//     name: `Ihor`,
//     age: 22,
//     sayHello: hello,
//     /* указывает на тот объект в котором его вызвали
// если через персон то указывает на сам персон с его данными
// если отдельно то на функцию hello */
//     sayHellowindow: hello.bind(this), //ссылка на глобальный window или любой другой 
//     logInfo: function(){
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//     }
// }

// const vasja = {
//     name: `Vasilii`,
//     age : 203
// }

// person.logInfo.bind(vasja)()
//передача другого контекста

const person = {
    name: `Ihor`,
    age: 22,
    sayHello: hello,
    sayHellowindow: hello.bind(this),
    logInfo: function(job, phone, crazy){
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`job is ${job}`);
        console.log(`phone is ${phone}`);
        console.log(`phone is ${crazy}`);
        
        console.groupEnd()
    }
}

const vasja = {
    name: `Vasilii`,
    age : 203
}

// person.logInfo.bind(vasja,`front`, `0656565656`)()
// person.logInfo.call(vasja,`front`, `0656565656`)
person.logInfo.apply(vasja,[`front`, `0656565656`, `04545367`])






const array = [1, 2, 3, 4, 5]

 Array.prototype.multBuy = function(n) {
    return this.map((i) =>{
        return i * n
    })
 }

 console.log(array.multBuy(6))