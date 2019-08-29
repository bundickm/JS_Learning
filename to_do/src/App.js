import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  {
    task: 'Get groceries',
    id: 1234567890,
    complete: false
  }
]

function App() {

  const [todoList, setTodos] = useState(todos)
  const [todoText, setText] = useState('')


  const handleChanges = e => {
    setText(e.target.value)
  }


  const addTodo = e => {
    e.preventDefault()
    setTodos([...todoList, {
      task: todoText,
      id: Date.now(),
      complete: false
    }])
    setText('')
  }


  const toggleComplete = index => {
    setTodos(todoList.map((todo, idx) => {
      if (index !== idx) {
        return todo
      } 
      else {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
    }))
  }


  const clearComplete = e => {
    e.preventDefault()
    setTodos(todoList.filter(todo => todo.complete == false))
  }

  return (
    <div className="App">
      <h1>To-Do List For Today!</h1>
      <TodoList 
        todoList={todoList} 
        toggleComplete={toggleComplete}/>
      <TodoForm 
        todoText={todoText} 
        handleChanges={handleChanges} 
        addTodo={addTodo} 
        clearComplete={clearComplete}/>
    </div>
  );
}

export default App;
