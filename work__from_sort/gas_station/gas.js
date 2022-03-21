const type__ofGas = document.querySelector('.type__ofGas');
const p = document.querySelector('p');
const gas = document.querySelectorAll('.gas')
const div = document.querySelector('.class')
const nameGas = document.querySelector('.name__gas')
const gasPriceInput = document.querySelector('.gas__priceInput')
const GasOutput = document.querySelector('.Gas__output ')
const price = document.querySelectorAll('.price')
const btnResulyPrice = document.querySelector('.resulyPrice')
const arrayOfInput = [];
const btnPassword = document.querySelector('.passwords')
const btnPasswordAdmin = document.querySelector('.adminEnter__btn-button');
const btnEnterNewPassword = document.querySelector('.adminChange__btn-button')
const btnClose = document.querySelector('.close__btn-button')
const btnEndDay = document.getElementById('endday')
const pageAdmin = document.getElementById('admin')
const pageChangepas = document.getElementById('change_pass')

console.log(btnEndDay)

let password = '12345';
const adminpassword = `pigas1q1`;

//enter change pasword menu
btnPasswordAdmin.addEventListener('click',()=>{
    if(document.getElementById('passAdmin').value === adminpassword){
        pageAdmin.classList.add('noneActive')
        pageChangepas.classList.remove('noneActive')
    } else {
        pageAdmin.classList.add('noneActive');
        gasPriceInput.classList.remove('noneActive')
    }
}
)

// Change password with buttons
btnEnterNewPassword.addEventListener('click', ()=>{
    if(document.getElementById('changeAdmin').value.length > 1){
        password = document.getElementById('changeAdmin').value;
        pageChangepas.classList.add('noneActive');
        gasPriceInput.classList.remove('noneActive');
    } else {
        alert('Wrong password, enter correct')
    }

})
// btn close
btnClose.addEventListener('click', () =>{
    pageChangepas.classList.add('noneActive');
    gasPriceInput.classList.remove('noneActive')
})


//check password , diseible remove from btn, disabled block password, if pass not work reload page
btnPassword.addEventListener('click',()=>{
    if (document.getElementById('pass').value === password){
        btnResulyPrice.removeAttribute('disabled');
        document.querySelector('.pass').classList.add('noneActive');
    } else {
       alert('ReEnter password!')
    }

})


//change tabs
const closePriceWindow = () =>{
    gasPriceInput.classList.add('noneActive');
    GasOutput.classList.remove('noneActive');
}







// output total amount 
for(let i = 0; i < gas.length; i++){
    gas[i].onclick = function(){
        const galons = document.querySelector('.galon').value;
        const amount = arrayOfInput[i];
        div.innerHTML = `Total: ${galons * amount} грн`;
    }
}


// change window after click , disabled gas station with price 0
btnResulyPrice.addEventListener('click', ()=>{
    closePriceWindow();
    for (let i =0; i < price.length; i++){
        arrayOfInput.push(document.querySelectorAll(".price")[i].value)
        
        if (arrayOfInput[i] === '' || +arrayOfInput === 0){
           type__ofGas.children[i].setAttribute('disabled',true)
        }
    }
})

// buuton end day

btnEndDay.onclick = () =>{
    window.location.reload()
}


