import React from "react";

const TodoList = (props) => {
    const {todos, toggleTodo} = props; //const todos = this.props.todos
    
    return (
        <div>
            <div class="header">
            <h2>COMMENT WIDGET</h2>
            <img class="comment-photo" src="img/wallpaper2.jpg" alt="Фото красивого пейзажа"></img>
            <p class="description">Туркестанский хребет — высокогорный хребет широтного направления, длиной около 340 км, относящийся к Гиссаро-Алайской горной системе.</p>
            </div>
            <ol>
                {
                todos.comments.map(todo => {
                    //jsx -> react.createElement("...")
                    return (
                    <li
                    key={todo.id}
                    >
                        <div class="comment">
                        <div class="user-name">{todo.name}:</div>
                        <div class="user-comment">{todo.comment}</div>
                        <div class="user-date">{todo.date}</div>
                        </div>
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