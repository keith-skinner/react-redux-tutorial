import React from 'react'

const noTodos = () => (
    <p className="center">You have no todos left, Woot!</p>
)

const renderTodo = (todo, deleteTodo) => (
    <div className="collection-item" key={todo.id}>
        <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
    </div>
)

const renderTodos = (todos, deleteTodo) => {
    return todos.map(todo => renderTodo(todo, deleteTodo))
}

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length > 0
        ? renderTodos(todos, deleteTodo)
        : noTodos()
    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos