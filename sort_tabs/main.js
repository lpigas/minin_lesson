const table = document.getElementById('table');
const namepeople = document.querySelector('.table__firstLine-first');
const cityName = document.querySelector('.table__firstLine-second');
const tableSecondLine = document.querySelectorAll('.table__secondLine');
const newNamePeople = document.querySelectorAll('.name')
const newCityName = document.querySelectorAll('.city')



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




let newObj = [];

for (let i = 0; i < newNamePeople.length; i++){
    newObj.push([newNamePeople[i].innerHTML,newCityName[i].innerHTML])
}

let newObjCity = [];

for (let i = 0; i < newNamePeople.length; i++){
    newObjCity.push([newCityName[i].innerHTML, newNamePeople[i].innerHTML])
}

const sortNameForward = () =>{
    newObj.sort();
    for (let i = 0; i < newObj.length; i++){
        newNamePeople[i].innerHTML = newObj[i][0]
        newCityName[i].innerHTML = newObj[i][1]
    }
}

const sortNameBack = () =>{
    newObj.sort();
    let j = 0
    for (let i = newObj.length - 1; i >= 0; i--){
        newNamePeople[j].innerHTML = newObj[i][0]
        newCityName[j].innerHTML = newObj[i][1]
        j++;
    }
}


const sortCityForward = () =>{
    newObjCity.sort();
    for (let i = 0; i < newObjCity.length; i++){
        newNamePeople[i].innerHTML = newObjCity[i][1]
        newCityName[i].innerHTML = newObjCity[i][0]
    }
}
const sortCityBack = () =>{
    newObjCity.sort();
    let j = 0
    for (let i = newObjCity.length - 1; i >= 0; i--){
        newNamePeople[j].innerHTML = newObjCity[i][1]
        newCityName[j].innerHTML = newObjCity[i][0]
        j++;
    }
}



namepeople.addEventListener('click',() =>{
    cityName.classList.remove('active', 'active2');
    if (namepeople.classList.contains('active')){
        changeForActiveSecond()
        sortNameBack()
    } else if (namepeople.classList.contains('active2')){
        changeForActiveFirst()
        sortNameForward()
    } else {
        changeForActiveFirst()
        sortNameForward()
    }
})
cityName.addEventListener('click',() =>{
    namepeople.classList.remove('active', 'active2');
    if (cityName.classList.contains('active')){
        changeForActiveSecondCity()
        sortCityBack()
    } else if (cityName.classList.contains('active2')){
        changeForActiveFirstCity()
        sortCityForward();
    } else {
        changeForActiveFirstCity()
        sortCityForward();
    }
})
