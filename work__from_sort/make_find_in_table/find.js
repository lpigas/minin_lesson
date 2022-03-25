const btnSelect= document.querySelector('[name=user_profile_find]');
const inputinput__find = document.querySelector('#inputFind');
const btnFind = document.querySelector('#btnFind');
const btnReset = document.querySelector('.reset');
const url = 'find.json';
const table = document.querySelector('tbody')
let changeFormValue = '';
let newUrl = [];
let x = []


function addPersondata() {
    fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(text) {
    for(let i = 0; i < text.length; i ++){
      newUrl.push(text[i])
        let makeTr = document.createElement('tr');
        makeTr.classList.add('table__firstLine')

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

  })
  .catch(function(error) {
    console.log('Request failed', error)
  });

}
addPersondata(url)







for (let i = 0; i < btnSelect.options.length; ++i) {
  btnSelect.options[i].foo = function() {
  }
}
btnSelect.onchange = function() {
  changeFormValue = this.options[this.selectedIndex].text;
};



btnFind.addEventListener('click',() =>{
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
    } else  {
      userData = new ageArray(newUrl)
      console.log(userData.findByAge(inputinput__find.value))
    }

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
      args.forEach(el => index[el.name] = el);

      return new Proxy (new target(...args), {
          get (arr, prop){

              switch(prop){
                  case 'push': return item =>{   //создание прототипа пуш для добавления строки 
                      index[item.name] = item
                      arr[prop].call(arr, item)
                  }
                  case 'findByName': return id =>{ // прототип поиска по и
                      return index[id]
                  }
                  default: return arr[prop]
              }
          }
      })
  }
})
const jobArray = new Proxy(Array,{
  construct(target,[args]){
      const index = {}
      args.forEach(el => index[el.job] = el);

      return new Proxy (new target(...args), {
          get (arr, prop){

              switch(prop){
                  case 'push': return item =>{   //создание прототипа пуш для добавления строки 
                      index[item.job] = item
                      arr[prop].call(arr, item)
                  }
                  case 'findByJob': return id =>{ // прототип поиска по и

                      return index[id]
                  }
                  default: return arr[prop]
              }
          }
      })
  }
})

const ageArray = new Proxy(Array,{
  construct(target,[args]){
      const index = {}
      args.forEach(el => index[el.age] = el);

      return new Proxy (new target(...args), {
          get (arr, prop){

              switch(prop){
                  case 'push': return item =>{   //создание прототипа пуш для добавления строки 
                      index[item.age] = item
                      arr[prop].call(arr, item)
                  }
                  case 'findByAge': return id =>{ // прототип поиска по и

                      return index[id]
                  }
                  default: return arr[prop]
              }
          }
      })
  }
})


