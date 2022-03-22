const delay = ms =>{
    return new Promise(r =>{
        // console.log(ms)
        setTimeout(() => r(), ms)
    })
}
// delay(2000).then(()=>{
//     console.log('vasilii')
// }) использование промиса - получение ответа от сервера  с задержкой


const url = 'https://jsonplaceholder.typicode.com/todos';// адресс запроса

// function fechTodos() { // функция для дополнительной задержки после обращенния на сервер
//     console.log('begin :')
//     return delay(2000)
//     .then(() =>{
//        return fetch(url)
//     }).then(r => r.json())// через фетч зен получаем данные с адресса


// }
// fechTodos() // вызов функции через зен получаем список полученных данных 
// .then(datas =>{
//     console.log('Data: ', datas)
// })
// .catch(e =>{ отлавить ошибку
//     console.log(e)
// })

let x = []
const random = () => Math.floor( Math.random()*10000)
const random2 = () => Math.floor( Math.random()*50)
async function fetchAsyncTodos(){
    try{   // ставится для catch  для введения варианта ошибок
        console.log('Begin')
        await delay(2000) // ожидаем выполнение ф-ции делей 
        const r = await fetch(url) // забираем из нее респонс и выполняем фетч
        const data = await r.json()// ждем фетч и забираем преобразование в формат джейсон
        console.log("Data :" , data)
        for(let i = 0; i < data.length; i++){
            x.push(data[i]);
        }
        console.log(x[1])
    } catch (e){
        console.error(e) // добавление консоль ерор если будет ошибка
    }finally{
        console.log("_______________________")
    }
}
let i=1;
document.querySelector('h1').addEventListener('click', () =>{
        fetchAsyncTodos().then(() => document.querySelector('h1').innerHTML = 'New name')
        .then(()=>{
            document.querySelector('div').textContent = x[0].title.toUpperCase();
            document.body.style.backgroundColor = `#${random()}`
        })
        .then(() =>{
           var interval = setInterval(() =>{
               document.body.style.backgroundColor = `#${random()}`
               document.querySelector('h1').style.fontSize = `${random2()}px`
               document.querySelector('div').style.fontSize = `${random2()}px`
               i++
               document.querySelector('div').innerHTML = x[i].title.toUpperCase()

                console.log(x[i].title)
                if (i === 10){
                    clearInterval(interval)
                }
            },2000)
        })

    })
    


