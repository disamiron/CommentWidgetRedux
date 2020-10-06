import React from "react";
const AddTodo = (props) => {
    const {todos, addTodo, onchangeName, onchangeComment} = props;
    return (
        <div>
            <input class="new-user-name"
                type="text"
                placeholder="Ваше имя"
                value={todos.form.name}
                onChange={ev => {
                    onchangeName(ev.target.value)
                  }}
            /><br/>
            <textarea class="new-user-comment"
                name="comment" cols="40" rows="3"
                placeholder="Ваш комментарий"
                value={todos.form.comment}
                onChange={ev => {
                    onchangeComment(ev.target.value)
                  }}
            /><br/>
            <button class="add-btn"
                onClick={ev => {
                addTodo([todos.form.name, todos.form.comment]);
            }}>Добавить комментарий
            </button>
        </div>
    )


}





  
  
export default AddTodo