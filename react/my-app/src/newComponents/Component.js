import React from 'react'

export default function Component(props) {
    const name = [
        {name:"vasya"},
        {name:'Andrey'},
        {name:'Vika'},
    
      ]
      function shalom(props){
          return (props.map(prop => <h1>шалом {prop.name}</h1> ))
      }
  return (
    <div>{shalom(name)}
    </div>
  )
}
