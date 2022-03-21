const person = Object.create({
    calcAge(){
        return new Date().getFullYear() - this.age
    }
}, {
    name: {
        value: `Egor`,
        enumerable: true, // отображение в ключах по дефолту стоит false
        writable: true, // возможность изменять поле по дефолту стоит false
        configurable: true// возможность удалять ключ по дефолту стоит false
    },
    age:{
        value: 25
    },
    birthYear:{
        get(){
            return new Date().getFullYear() - this.age
        },
        set(value){
            document.body.style.background ='red'
            console.log(`this is your value ` + value)
        }
    }
})
// person.name = `loh`
for(let key in person){
    if(person.hasOwnProperty(key)){   // исключение созданных прототипов из ключей
        console.log(key, person[key])
    }
    
}
