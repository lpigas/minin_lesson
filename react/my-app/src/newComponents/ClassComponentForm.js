import React, { Component } from 'react'


const styles ={
    ol:{
        backgroundColor:'red',
        fontSize: '2rem',
        display:'flex',
        padding: '5px',
        justifyContent: 'center',
        marginBottom: '5px'
    },
    input:{
        marginRight: '5px',

    }

}
export default class ClassComponentForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:'',
       item:[]

    }

    this.InputChange = this.InputChange.bind(this);
    this.click = this.click.bind(this);
  }    

  InputChange(e){
      this.setState({
          input:e.target.value
      })
  }

  click(e){
    e.preventDefault()
    this.setState({
        input: this.state.input,
        item:[...this.state.item, this.state.input],
    })
    this.setState({
        input:""
    })
  }
  render() {
      return(
          <div>
              <form onSubmit={this.click}>
                <input style={styles.input} value={this.state.input} onChange={this.InputChange}/>
                <button type='submit'>input change</button>

              </form>

            <ul>
                {this.state.item.map((i, index )=> (
                    <ol style={styles.ol} key={index}>{i}</ol>
                ))}
            </ul>

          </div>


      )
  
}
}