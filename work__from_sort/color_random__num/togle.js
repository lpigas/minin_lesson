const togle = document.querySelector('.togle');
const body = document.querySelector('body');
const div = document.querySelector('div');
const random = () => Math.floor( Math.random() * 1000)

togle.addEventListener('click', () =>{
    let randomNum = random()
    body.style.backgroundColor = `#${randomNum}`;
    div.innerHTML = `Color is: #${randomNum}`;
})
