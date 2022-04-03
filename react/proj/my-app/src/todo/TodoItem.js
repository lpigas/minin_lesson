import React, {useContext} from "react";
import propTypes from 'prop-types'
import Contekst from '../context'

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alingnItems: 'center',
        padding:'.5rem 1rem',
        border: '2px solid black',
        borderRadius: '4px',
        marginTop:'.5rem'
    },
    input:{
        marginRight: '1rem',
        backgroundColor:'blue',
    },
    button:{
        backgroundColor:'blue',
        borderRadius:'50%',
        border:'none',
        color:"#fff"
    }
}

function TodoItem({todo, index, onChange}) {
    const {removed} = useContext(Contekst)
    const classes = [];
    
    if (todo.comleted){
        classes.push('done')
    }
    console.log(classes)
    return (
        <li style={styles.li}> 
            <span className={classes.join('')}>
                <input type='checkbox' 
                checked={todo.comleted}
                style={styles.input} 
                onChange={() => onChange(todo.id)}/>
                <strong>{index+1}</strong>
                &nbsp;
                {todo.titel}
            </span>
                <button 
                style={styles.button}
                
                onClick={() => removed(todo.id)}
                >&times;</button>
            
            </li>
    )

}
TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number,
    onChange: propTypes.func.isRequired
}


export default TodoItem