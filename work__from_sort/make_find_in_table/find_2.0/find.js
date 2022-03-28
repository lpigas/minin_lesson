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



for (let i = 0; i < btnSelect.options.length; ++i) {
  btnSelect.options[i].foo = function() {
  }
}
btnSelect.onchange = function() {
  changeFormValue = this.options[this.selectedIndex].text;
};
function find() {
  let userData;
  if (changeFormValue === 'Id'){
    userData = new indexArray(newUrl)
    console.log(userData.findById(inputinput__find.value))
    } else if(changeFormValue === 'Name'  ) {
      userData = new nameArray(newUrl)
      console.log(userData.findByName(inputinput__find.value))
    } else if(changeFormValue === 'Job') {
      userData = new jobArray(newUrl)
      console.log(userData.findByJob(inputinput__find.value))
    } else  if(changeFormValue === 'Age'){
      userData = new ageArray(newUrl)
      console.log(userData.findByAge(inputinput__find.value))
    }
}
let changeActiveStatus ='' ;
let changeActiveStatus2 = '' ;
let y = 0
btnFind.onclick = (() =>{
  y++;
    find()
    

    if (changeActiveStatus !== changeFormValue || changeActiveStatus2 !== inputinput__find.value){
      table.classList.remove('active')
      
      changeActive()
    } else {
      table.classList.add('active')
      y--
      newUrl = [];
    }
    addData(x)
    
    if (y > 1){
      for(let i = 3; i < tbodyNew.length; i++){
        while (tbodyNew.length > 3){
          tbodyNew[i].remove()
        }
        
        
      }
      // newUrl = [];
      addPersondata(url)
      find();
      addData(x,1)
      setTimeout(() => {
        changeActive()
      }, 100);
     
    }
    changeActiveStatus = (changeFormValue);
    changeActiveStatus2 = inputinput__find.value;
  })


const indexArray = new Proxy(Array,{
  construct(target,[args]){
      x = []
      const index = {}
      args.forEach(el => {
          if (el.id == inputinput__find.value)
          x.push(el)
          index[el.id] = el
          return x
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

const nameArray = new Proxy(Array,{
  construct(target,[args]){
    const index = {}
    args.forEach(el => {
      if (el.name == inputinput__find.value)
        x = []
        x.push(el)
        index[el.name] = el
        return x
    });
    return new Proxy (new target(...args), {
        get (arr, prop){
            switch(prop){
                case 'findByName': return id =>{ // прототип поиска по и
                    return x
                }
                default: return arr[prop]
            }
        }
    })
}
})
const jobArray = new Proxy(Array,{
  construct(target,[args]){
    x = []
    const index = {}
    args.forEach(el => {
        if (el.job == inputinput__find.value)
        x.push(el)
        index[el.job] = el
        return x
    });
    return new Proxy (new target(...args), {
        get (arr, prop){
            switch(prop){
                case 'findByJob': return id =>{ // прототип поиска по и
                    return x
                }
                default: return arr[prop]
            }
        }
    })
}
})

const ageArray = new Proxy(Array,{
  construct(target,[args]){
    x = []
    const index = {}
    args.forEach(el => {
        if (el.age == inputinput__find.value)
        x.push(el)
        index[el.age] = el
        return x
    });
    return new Proxy (new target(...args), {
        get (arr, prop){
            switch(prop){
                case 'findByAge': return id =>{ // прототип поиска по и
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