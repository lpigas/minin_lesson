// make all constant
const table = document.getElementById('table');
const namepeople = document.querySelector('.table__firstLine-first');
const cityName = document.querySelector('.table__firstLine-second');
const phoneName = document.querySelector('.table__firstLine-third');
const tableSecondLine = document.querySelectorAll('.table__secondLine');
const newNamePeople = document.querySelectorAll('.name')
const newCityName = document.querySelectorAll('.city')
const newPhoneName = document.querySelectorAll('.phone')
const reset = document.getElementById(`reset`)



// change class for css
const changeForActiveFirst = () =>{
    namepeople.classList.add('active');
    namepeople.classList.remove('active2')
}
const changeForActiveSecond = () =>{
    namepeople.classList.add('active2');
    namepeople.classList.remove('active');
}
const changeForActiveFirstCity = () =>{
    cityName.classList.add('active');
    cityName.classList.remove('active2');
}
const changeForActiveSecondCity = () =>{
    cityName.classList.remove('active');
    cityName.classList.add('active2');
}
const changeForActiveFirstPhone = () =>{
    phoneName.classList.add('active');
    phoneName.classList.remove('active2');
}
const changeForActiveSecondPhone = () =>{
    phoneName.classList.remove('active');
    phoneName.classList.add('active2');
}

//make Array for change and reset
let newObjPhone = [];
const resetall = [];
for (let i = 0; i < newNamePeople.length; i++){
    
    newObjPhone.push({
        phone:  +newPhoneName[i].innerHTML,
        city:  newCityName[i].innerHTML,
        name: newNamePeople[i].innerHTML
        
    })
    resetall.push(newObjPhone[i])
}

// sort both
const sortBothSides = ({isForward, key, type}) =>{
    newObjPhone.sort((a, b) => {
        if(isForward) {
            console.log('asd[')
            return type === 'string' ? a[key].localeCompare(b[key])  : a[key] - b[key]
            
        } else {
            return type ==='string' ? b[key].localeCompare(a[key]) :b[key] - a[key]  
        }
    });
    console.log()
    for (let i = 0; i < newObjPhone.length; i++){
        newNamePeople[i].innerHTML = newObjPhone[i].name;
        newCityName[i].innerHTML = newObjPhone[i].city;
        newPhoneName[i].innerHTML = newObjPhone[i].phone;
    }

}


namepeople.addEventListener('click',() =>{
    cityName.classList.remove('active', 'active2');
    phoneName.classList.remove('active', 'active2');
    if (namepeople.classList.contains('active')){
        changeForActiveSecond();
        sortBothSides({isForward: false, key: 'name', type: 'string'})
    } else if (namepeople.classList.contains('active2')){
        changeForActiveFirst();
        sortBothSides({isForward: true, key: 'name', type: 'string'})
    } else {
        changeForActiveFirst();
        sortBothSides({isForward: true, key: 'name', type: 'string'})
    }
})
cityName.addEventListener('click',() =>{
    namepeople.classList.remove('active', 'active2');
    phoneName.classList.remove('active', 'active2');
    if (cityName.classList.contains('active')){
        changeForActiveSecondCity();
        sortBothSides(false, 'city', 'string')
    } else if (cityName.classList.contains('active2')){
        changeForActiveFirstCity();
        sortBothSides(true, 'city', 'string')
    } else {
        changeForActiveFirstCity();
        sortBothSides(true, 'city', 'string')
    }
})
phoneName.addEventListener('click',() =>{
    namepeople.classList.remove('active', 'active2');
    cityName.classList.remove('active', 'active2');
    if (phoneName.classList.contains('active')){
        changeForActiveSecondPhone();
        sortBothSides({isForward: false, key: 'phone', type: 'number'})
    } else if (phoneName.classList.contains('active2')){
        changeForActiveFirstPhone();
        sortBothSides({isForward: true, key: 'phone', type: 'number'})
    } else {
        changeForActiveFirstPhone();
        sortBothSides({isForward: true, key: 'phone', type: 'number'})
    }
})




// resset button
reset.addEventListener('click', () =>{
    for(let i = 0; i < newNamePeople.length; i++){
        newNamePeople[i].innerHTML = resetall[i].name;
        newCityName[i].innerHTML = resetall[i].city;
        newPhoneName[i].innerHTML = resetall[i].phone;
        
    }
    cityName.classList.remove('active', 'active2');
    namepeople.classList.remove('active', 'active2');
    phoneName.classList.remove('active', 'active2');
    console.log(resetall)
})








