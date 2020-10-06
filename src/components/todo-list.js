import React from "react";

const TodoList = (props) => {
    const {todos, toggleTodo} = props; //const todos = this.props.todos
    
    return (
        <div>
            <h2>COMMENT WIDGET</h2>
            <img class="comment-photo" src="img/wallpaper.jpg" alt="Фото красивого пейзажа"></img>
            <ol>
                {
                todos.comments.map(todo => {
                    //jsx -> react.createElement("...")
                    return (
                    <li
                    key={todo.id}
                    >
                        <div class="user-name">{todo.name}:</div>
                        <div class="user-comment">{todo.comment}</div>
                        <div class="user-date">{todo.date}</div>
                    <button class="delete-btn" onClick = {ev => toggleTodo(todo.id)}>Удалить комментарий</button>    
                    </li>
                    )
                })
                }
            </ol>
      </div> 
    );
};

export default TodoList;