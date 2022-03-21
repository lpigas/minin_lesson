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
const btnEnter = document.querySelector('.enter')
const btnChangeRemainde = document.querySelector('.gas__remainder-btn_button')
const btnReset = document.querySelector('#reset')
const pageAdmin = document.getElementById('admin')
const pageChangepas = document.getElementById('change_pass')
const totalWriteEndDay = document.querySelector('.total')
const totalPage = document.querySelector('.totalAmount')
const volDisplay = document.querySelectorAll('.lastVolumes')
const gasRemainder = document.querySelectorAll('.gas__remainder-input')
const totalPageindex = document.querySelectorAll('.total2')




let gasRemainderdis = 0;
let amountt = 0;
let totalAmount = 0;
let password = '';
const adminpassword = `pigas1q1`;
// add volume info





const checkbox = document.querySelectorAll('.checkboxer');
btnChangeRemainde.addEventListener('click', () =>{
    btnChangeRemainde.removeAttribute('disabled');
    btnEnterNewPassword.removeAttribute('disabled');
    document.getElementById('changeAdmin').removeAttribute('disabled');
    for(let i = 0; i < volDisplay.length; i++){
        volDisplay[i].innerHTML = gasRemainder[i].value ;
        if (gasRemainder[i].value === 0 || gasRemainder[i].value === ''){
            type__ofGas.children[i].setAttribute('disabled',true)
            volDisplay[i].innerHTML = 0;
            volDisplay[i].setAttribute('disabled',true)
             
        }
        gasRemainder[i].setAttribute('disabled',true)
        checkbox[i].setAttribute('disabled',true)
    }
    btnChangeRemainde.setAttribute('disabled',true)
})

//seen checkbox updete
let dop = 0;
for(let i = 0; i < checkbox.length; i++){
    checkbox[i].onclick = () =>{
        checkbox[i].classList.toggle('active')
        checkbox[i].classList.toggle('nonActive')
        if (checkbox[i].classList.contains('active')){
            dop++
        }else {
            dop--
        }
        if(dop === checkbox.length){
            btnChangeRemainde.removeAttribute('disabled');
        }
        console.log('dop - ', dop, 'checkbox.length- ', checkbox.length)
        if(!btnChangeRemainde.hasAttribute('disabled') && dop !== checkbox.length){
            btnChangeRemainde.setAttribute('disabled', true);
        }
    }
}


// реализация остатков топлива, отпуск до минимума, установка остатков топлива в админе , подключение отключение топлива
//через галочки кол-во литров проданного топлива в Енд дей









//enter change pasword menu
btnPasswordAdmin.addEventListener('click',()=>{
    if(document.getElementById('passAdmin').value === adminpassword){
        pageAdmin.classList.add('noneActive')
        pageChangepas.classList.remove('noneActive')
    } else {
        alert('admin password uncorrect')
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
    window.location.reload()
})


//check password , diseible remove from btn, disabled block password, if pass not work reload page
btnPassword.addEventListener('click',()=>{
    if (document.getElementById('pass').value === password ||document.getElementById('pass').value === adminpassword){
        btnResulyPrice.removeAttribute('disabled');
        document.querySelector('.pass').classList.add('noneActive');
    } else {
       alert('Re-Enter password!')
    }

})


//change tabs
const closePriceWindow = () =>{
    gasPriceInput.classList.add('noneActive');
    GasOutput.classList.remove('noneActive');
    btnEndDay.removeAttribute('disabled');
    btnReset.removeAttribute('disabled');
    
}


// reset button
btnReset.onclick = () =>{
    gasPriceInput.classList.remove('noneActive');
    document.querySelector('.pass').classList.remove('noneActive')
    GasOutput.classList.add('noneActive');
    totalPage.classList.add('noneActive');
    btnResulyPrice.setAttribute('disabled', true)
    btnEndDay.setAttribute('disabled', true)

}




// output total `amount` 
for(let i = 0; i < gas.length; i++){
    gas[i].onclick = function(){
        const galons = document.querySelector('.galon').value;
        const amount = arrayOfInput[i];
        
        gasRemainderdis = galons;
        if (+galons > +volDisplay[i].innerHTML){
            alert('Not has volume, change please')
        }else{
            for (let j = 0; j <gas.length; j++){
                gas[j].classList.remove('activiri')    
            }
            gas[i].classList.add('activiri')
            div.innerHTML = `Total: ${galons * amount} грн`;
            amountt = galons * amount;

        }

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

// button end day

btnEndDay.onclick = () =>{

    if(GasOutput.classList.contains('noneActive')){
        window.location.reload()
    } else {
        GasOutput.classList.add('noneActive');
        totalPage.classList.remove('noneActive');
        totalWriteEndDay.innerHTML = `Total amount: ${totalAmount} грн.`
        for (let i = 0; i < volDisplay.length; i++){
            if (+volDisplay[i].innerHTML !== +gasRemainder[i].value){
                totalPageindex[i].innerHTML = `${totalPageindex[i].innerHTML} - ${ +gasRemainder[i].value - +volDisplay[i].innerHTML} gal`

            } else {
                totalPageindex[i].innerHTML= `${totalPageindex[i].innerHTML} - 0 gal`
            }
        }
    }
    console.log(volDisplay[i].innerHTML)
    
}


// button enter add amount to total money
btnEnter.onclick =  () =>{
    totalAmount += amountt;
    document.querySelector('.galon').value = ''
    div.innerHTML = `Total:`
    for(let i = 0; i < gas.length; i++){
        if (gas[i].classList.contains('activiri')){
            volDisplay[i].innerHTML = +volDisplay[i].innerHTML - gasRemainderdis;           
        }
        if (+volDisplay[i].innerHTML === 0 || volDisplay[i].innerHTML === ''){
            gas[i].setAttribute('disabled')     
        }
    }
}

