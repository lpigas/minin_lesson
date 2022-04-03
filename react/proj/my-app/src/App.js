import React from 'react';
import TodoList from './todo/TodoList';
import Contekst from './context'

function App() {
  
    const [todos, setTodos]= React.useState([
      {id: 1, comleted: false, titel:'Купить хлеба'},
      {id: 2, comleted: false, titel:'Купить vfckj'},
      {id: 3, comleted: false, titel:'Купить молоко'},
      {id: 4, comleted: false, titel:'Купить djle'},
    ])
 
    function toggleTodo(id){
      setTodos(
        todos.map(todo => {
        if(todo.id === id){
          todo.comleted = !todo.comleted;
        }
        return todo;
      }))
    }

    function removed(id) {
      setTodos(todos.filter(todo =>todo.id !== id))
    }
    return (
      <Contekst.Provider value={{ removed }}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p> У вас нет заданий</p> }
        
      </div>
    </Contekst.Provider>
    );
  
}

export default App;
