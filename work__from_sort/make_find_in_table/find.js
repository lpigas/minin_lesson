const btnSelect= document.querySelectorAll('option');
const inputFind = document.querySelector('#inputFind');
const btnFind = document.querySelector('#btnFind');
const btnReset = document.querySelector('.reset');
const url = 'find.json';
const table = document.querySelector('tbody')

function addPersondata() {
    fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(text) {
    for(let i = 0; i < text.length; i ++){
        let makeTr = document.createElement('tr');
        makeTr.classList.add('table__firstLine')

        let makeId = document.createElement('td');
        let makeName = document.createElement('td');
        let makeJob = document.createElement('td');
        let makeAge = document.createElement('td');
        makeId.classList.add('table__firstLine-first')
        makeName.classList.add('table__firstLine-first')
        makeJob.classList.add('table__firstLine-first')
        makeAge.classList.add('table__firstLine-first')

        makeId.innerHTML = text[i].id
        makeName.innerHTML = text[i].name
        makeJob.innerHTML = text[i].job
        makeAge.innerHTML = text[i].age
        makeTr.appendChild(makeId)
        makeTr.appendChild(makeName)
        makeTr.appendChild(makeJob)
        makeTr.appendChild(makeAge)
        table.appendChild(makeTr)
      
    }

  })
  .catch(function(error) {
    console.log('Request failed', error)
  });

}
addPersondata(url)










// const indexArray = new Proxy(Array,{
//     construct(target,[args]){
//         const index = {}
//         args.forEach(el => index[el.id] = el);

//         return new Proxy (new target(...args), {
//             get (arr, prop){

//                 switch(prop){
//                     case 'push': return item =>{   //создание прототипа пуш для добавления строки 
//                         index[item.id] = item
//                         arr[prop].call(arr, item)
//                     }
//                     case 'findById': return id =>{ // прототип поиска по и
//                         console.log('what a hell I doing')
//                         return index[id]
//                     }
//                     default: return arr[prop]
//                 }
//             }
//         })
//     }
// })

// //make find by age
// const ageArray = new Proxy(Array,{
//     construct(target,[args]){
//         const ages = {}
//         args.forEach(el => ages[el.age] = el);

//         return new Proxy (new target(...args), {
//             get (arr, prop){
//                 switch(prop){
//                     case 'findByAge': return age =>{ // прототип поиска по и
//                         console.log('what a hell you doing')
//                         return document.body.innerHTML = `Name - ${ages[age].name}, job - ${ages[age].job}, age - ${ages[age].age}`
//                     }
//                     default: return arr[prop]
//                 }
//             }
//         })
//     }
// })




// const userData = new indexArray([
//     {id: 12001, name: 'Elena', job: 'home maker', age: 25},
//     {id: 12011, name: 'Viktor', job: 'Tester', age: 29},
//     {id: 12021, name: 'Ihor', job: 'Killer', age: 30},
//     {id: 12031, name: 'Anna', job: 'Student', age: 19},
// ])
// const userDatas = new ageArray(userData)


// btnFind.addEventListener('click',() =>{
//     console.log(btnSelect)
// })