// function calcFunction(n){
//     return function(){
//         console.log(`KuKu` + n)
//     }
// }

// const calc = calcFunction(400);
// calc()


// function createInc(n){
//     return function(num){
//         return n + num;
//     }
// }

// const addone = createInc(1);
// const addTen = createInc(10)
// console.log(addone(41))
// console.log(addTen(4))


// function urlGeneretor (domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }

// const body = document.getElementById('body')
// const comUrl = urlGeneretor('com');
// function pups(cite) {
//     div = document.createElement(`div`)
//     body.appendChild(div)
//     div.classList.add('name2')
//     div.innerHTML = comUrl(`${cite}`)
// }

// pups(`google`)
// pups(`you`)



////////////////////////////////////////////////// Test

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}


const person1 = {name: `Lena`, age: 25, job: `home maker`};
const person2 = {name: `Misha`, age: 30, job: `Frontend`};

const bind = (context, fn) => fn.apply(context, logPerson)
bind(person1,logPerson)