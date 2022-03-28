// wrappers

const withDefaultValue = (target, defaultValue = '') =>{
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
    })
}

const position = withDefaultValue({
    x: 25,
    y: 25,
    z: 25,
}, 12)

// для получения вместо ошибки при обращении к ключу которого нет, дефолтного значения
//_____________________________________________________________________________________

// hidden properties 

const withHiddenProps = (target, prefix = 'id') =>{
    return new Proxy(target, {
        has:(obj, prop) => (prop in obj) && (!prop.includes(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.includes(prefix)),
        get:(obj, prop, reseiver) =>(prop in reseiver) 
        ? obj[prop] : void 0
    })
}
let positions = withHiddenProps({
    name: 'Vasilii',
    age: 25,
    job: 'Killer',
    id: "3120000454"
},'d')
// скрытие поля по определенному параметру

// for(key in positions){
//     div = document.createElement('div')
//     div.style.fontSize = '25px'
//     div.innerHTML = `${(key).toUpperCase()} for person - ${positions[key]}`
//     document.body.appendChild(div)
    
// }

// мой пример взаимодействия вывод в лист всех параметров объекта кроме id  еще вариант при содержании чего то определенного, начинается заканчивается
//_____________________________________________________________________________________

// hidden properties 

const x = []
let y = []
const indexArray = new Proxy(Array,{
    construct(target,[args]){
        const index = {}
        args.forEach(el => {
            if (el.id == '')
            x.push(el)
            index[el.id] = el
            return x
        });
        return new Proxy (new target(...args), {
            get (arr, prop){
                switch(prop){
                    case 'findById': return id =>{ // прототип поиска по и
                        return x
                    }
                    default: return arr[prop]
                }
            }
        })
    }
})

const nameArray = new Proxy(Array,{
    construct(target,[args]){
        const index = {}
        args.forEach(el => {
            if (el.name == '')
            x.push(el)
            index[el.name] = el
            return x
        });
        return new Proxy (new target(...args), {
            get (arr, prop){
                switch(prop){
                    case 'findByName': return id =>{ // прототип поиска по и
                        return x
                    }
                    default: return arr[prop]
                }
            }
        })
    }
})
const jobArray = new Proxy(Array,{
    construct(target,[args]){
        const index = {}
        args.forEach(el => {
            if (el.job == '')
            x.push(el)
            index[el.job] = el
            return x
        });
        return new Proxy (new target(...args), {
            get (arr, prop){
                switch(prop){
                    case 'findByJob': return id =>{ // прототип поиска по и
                        return x
                    }
                    default: return arr[prop]
                }
            }
        })
    }
})

//make find by age
const ageArray = new Proxy(Array,{
    construct(target,[args]){
        const index = {}
        args.forEach(el => {
            if (el.age == '29')
            x.push(el)
            index[el.age] = el
            return x
        });
        return new Proxy (new target(...args), {
            get (arr, prop){
                switch(prop){
                    case 'findByAge': return id =>{ // прототип поиска по и
                        return x
                    }
                    default: return arr[prop]
                }
            }
        })
    }
})




let userData = new indexArray([
    {id: 12001, name: 'Elena', job: 'home maker', age: 25},
    {id: 12041, name: 'Viktor', job: 'Tester', age: 29},
    {id: 12001, name: 'Ihor', job: 'Killer', age: 25},
    {id: 12006, name: 'Anna', job: 'Student', age: 19},
])
const userDatas = new ageArray(userData)
const userName = new nameArray(userData)
const jobName = new jobArray(userData)
