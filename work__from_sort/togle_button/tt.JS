const active = document.querySelector('.active')
const div = document.querySelector('button')





const random = () => Math.floor( Math.random() * 1000)

if (div.classList.contains('active')){
    active.style.border = `5px solid #${random()}`
}
div.addEventListener('click', () =>{
    active.classList.toggle('active')
    if (div.classList.contains('active')){
        active.style.border = `8px solid #${random()}`
    }else{
        active.style.border = `1px solid black`
    }
})
