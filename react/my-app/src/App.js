import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import ClassComponent from './newComponents/ClassComponent';
import ClassComponentForm from './newComponents/ClassComponentForm'

import ButtonClose from './newComponents/ButtonClose'



const styles= {
  button:{
    backgroundColor: 'darkblue',
    fontSize: '1rem',
    color:"#fff",
    border: 'none',
    borderRadius: '25%'

  }
}
// const names = [
//   {name:"vasya",
//    id:1},
//   {name:'Andrey',
//   id:2},
//   {name:'Vika',
//   id:3},

// ]
function App(){

  // function Welcome(names) {
  //   return (names.map(el => 
  //   <h1 key={el.id}>Hello, {el.name}</h1>))
  // }

 
    return (
      <div className="App" >

          <header className="App-header">
          <button style={styles.button} type='button'>button</button>
          <button style={styles.button} type='reset'>reset</button>
          
          <ButtonClose />
          </header>
          <main className='loh'>
            <ClassComponentForm />


          </main>


          <footer className='footer'> 
          <div className='foote-text'>
            <h2>How do that?</h2>            
            </div>
            
          <div className='footer-buttonClose'><ButtonClose /></div>
          
          
          </footer>


        
          
      </div>
    );
    
  }


export default App;


