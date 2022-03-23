// proxy object
const person = {
    name: 'Vasilii',
    age: 22,
    job: 'Killer',
}


const op = new Proxy(person, { // 2 parametr 1 peremen 2 hendler
    get(target, prop){ // target сам объект  prop - ключ
        // console.log(prop, 'prop');
        if(!(prop in target)){
           
            return document.body.innerHTML = prop.split('_').map(p => target[p]).join(' '); // возможность выбирать нужные поля для вывода строкой

        }
        return target[prop]
    }, 
    set(target, prop, value){ // принимает 3 значения value - значение с которым можно работать при условиях

        value = value + value
        console.log (prop, 'prop', value, '= value')
        if(prop in target){
            target[prop] = value
        }else{
            throw new Error(`No prop ${prop} in target`)
        }


    },
    has(target, prop){  // проверка на наличие строки или эл массива в объекте
        return ['name', 'age', 'job'].includes(prop)
    },
    deleteProperty(target, prop){ // возможность удалить отдельное поле 
        console.log('Delete prop',prop);
        delete target[prop];
    }
}) 


// функционал прокси

const log = text => `Log :${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray){                       //для изменения функции
        console.log('target')

        return target.apply(thisArg, argArray)
    }
})


// Classes

class Person{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray){

        console.log('argArray');
        return new target(...argArray)  //можно обернуть в новый прокси для добавления гетера или сетера
    }
})

const fd = new PersonProxy('Maxim', 30, 'Killer');
fd.age += 25
// console.log(fd)