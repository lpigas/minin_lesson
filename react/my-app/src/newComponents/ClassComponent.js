import React, { Component } from 'react'


const restart =()=>{
  window.location.reload()
}

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
    }

    this.plusCount = this.plusCount.bind(this)
    this.minusCount = this.minusCount.bind(this)
    this.countReset = this.countReset.bind(this)
  }    

  plusCount (){
    this.setState(state =>({
      count: state.count + 1
    }))
  }
  minusCount (){
    this.setState(state =>({
      count: state.count - 1

    }))
    
  }

  countReset (){
    this.setState({count: 0})

  }


  render() {
    if(this.state.count < 0){
      return (
        <div>
          <h1>Sahka kulibjaka</h1>
          <button onClick={restart}>Restart</button>
        </div>)

    }else {
      return (
      <div>
            <h1>Class number {this.state.count}</h1>
            <button onClick={this.plusCount}>Plus</button>
            <button onClick={this.minusCount}>minus</button>
            <button onClick={this.countReset}>Reset</button>
      </div>

    )
      
    }

    }
    
  
}
