import React from 'react'

const TodoForm = props => {
    return(
        <div>
            <h4>Add a New Todo</h4>
            <form>
                <input
                    value={props.todoText}
                    type='text'
                    name='todoText'
                    placeholder='Enter a To-Do'
                    required
                    onChange={props.handleChanges}
                />
            </form>
            <div className="buttons">
                <button onClick={props.addTodo}>Add To-Do</button>
                <button onClick={props.clearComplete}>Clear Complete</button>
            </div>
        </div>
    )
}

export default TodoForm