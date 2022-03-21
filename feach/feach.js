


fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(text) {
    for(let i = 0; i <text.length; i ++){
        let div = document.createElement('div');
        div.classList.add('renit')
        div.innerHTML = `Топливо ${Object.values(text[i])[0]} остаток ${Object.values(text[i])[1]}`
        const body  = document.getElementById('body')
        body.appendChild(div)
        Object.entries(text) 
        console.log( Object.keys(text[i]))
        
    }

  })
  .catch(function(error) {
    console.log('Request failed', error)
  });

const body = document.getElementsByClassName('renit')
console.log(body)