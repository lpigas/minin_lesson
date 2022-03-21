const titels = document.getElementById('body');
const body = document.getElementById('all');
const second = document.querySelector('h2')


const second2 = titels.nextElementSibling
console.log(second2)



const changeBody = (noder) => {
    
    noder.innerHTML = `Sashka Mordashka`
    noder.style.textAlign = `center`;
    noder.style.color = `blue`;
    noder.style.backgroundColor = `pink`;
    noder.style.fontSize = `60px`;
    noder.style.padding = `2rem`;

}
const changeBody2 = (second) => {
     second.innerHTML = `Melkaya Kolbaska`
    second.style.textAlign = `center`;
    second.style.color = `green`;
    second.style.backgroundColor = `red`;
    second.style.fontSize = `60px`;
    second.style.padding = `2rem`;
}

body.addEventListener('click', () =>{
    setTimeout(() =>{
        changeBody(titels)
    }, 500); 
    
})
body.addEventListener('click',() =>{
    setTimeout(() =>{
        changeBody2(second)
    }, 2000)})
