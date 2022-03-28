const btnSelect= document.querySelector('[name=user_profile_find]');
const inputinput__find = document.querySelector('#inputFind');
const btnFind = document.querySelector('#btnFind');
const btnReset = document.querySelector('.reset');
let url = 'find.json';
const table = document.querySelector('tbody')
let changeFormValue = '';
let newUrl = [];
let x = []
const tbodyNew = document.querySelector('tbody').children

function addData(text, deth = 0) {
  newUrl = []
  for(let i = 0; i < text.length; i ++){
    newUrl.push(text[i])
      let makeTr = document.createElement('tr');
      if (deth === 1){
        makeTr.classList.add('table__firstLine', 'nonactive')
      } else {
        makeTr.classList.add('table__firstLine', 'active')
      }
      

      let makeId = document.createElement('td');
      let makeName = document.createElement('td');
      let makeJob = document.createElement('td');
      let makeAge = document.createElement('td');
      makeId.classList.add('table__firstLine-first')
      makeName.classList.add('table__firstLine-first')
      makeJob.classList.add('table__firstLine-first')
      makeAge.classList.add('table__firstLine-first', 'second')
      makeAge.style.marginLeft = '0px'

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
}

function addPersondata() {
    fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(text) {
    addData(text)

  })
  .catch(function(error) {
    console.log('Request failed', error)
  });

}
addPersondata(url)


table.classList.add('active')
function changeActive(){
  for (let i = 3; i < tbodyNew.length; i++){
    if (tbodyNew[i].classList.contains('active')){
      console.log(tbodyNew[i])
      tbodyNew[i].classList.remove('active')
      tbodyNew[i].classList.add('nonactive')
    } else {
      tbodyNew[i].classList.add('active')
      tbodyNew[i].classList.remove('nonactive')
    }
  }
}

function changesActive(){
  
  for (let i = tbodyNew.length - 1; i > 3; i--){
    console.log(tbodyNew[i])
    while(i > 3 && tbodyNew[i].classList.contains('active')){
      tbodyNew[i].remove()

    }
  }
}


function find() {
  let userData;

    userData = new indexArray(newUrl)
    console.log(userData.findById(inputinput__find.value))
    y++
    
}
let changeActiveStatus ='' ;
let changeActiveStatus2 = '' ;
let y = 0
btnFind.onclick = (() =>{
  if ((changeActiveStatus !== changeFormValue || changeActiveStatus2 !== inputinput__find.value)){
    for(let i = 3; i < tbodyNew.length; i++){
      while (tbodyNew.length > 3){
        tbodyNew[i].remove()
      }
    }
    addPersondata(url)
    find();
    addData(x,1)
    setTimeout(() => {
      changeActive()
    }, 50);
}
changeActiveStatus = (changeFormValue);
changeActiveStatus2 = inputinput__find.value;
  })
  const indexArray = new Proxy(Array,{
    construct(target,[args]){
        x = []
        const index = {}
        args.forEach(el => {
          if (el.id.toString().includes(inputinput__find.value) ||
          el.name.toString().includes(inputinput__find.value) ||
          el.job.toString().includes(inputinput__find.value) ||
          el.age.toString().includes(inputinput__find.value))
          x.push(el)
          index[el.id] = el
          return x
          console.log(x)
        });
        return new Proxy (new target(...args), {
            get (arr, prop){
                switch(prop){
                    case 'findById': return id =>{ // прототип поиска по и
                        return x
                    }
                    default: return arr[prop]
                }
            }
        })
    }
  })
  
  
  
  btnReset.addEventListener('click', () => {
    newUrl = [];
    x = [];
    for(let i = 3; i < tbodyNew.length; i++){
      while (tbodyNew.length > 3){
        tbodyNew[i].remove()
      }}
      addPersondata(url)
  })