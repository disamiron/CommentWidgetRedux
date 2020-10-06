import React from "react";
import { connect } from "react-redux"
import TodoList from "../components/todo-list";
import AddTodo from "../components/add-todo";

import {addTodo, toggleTodo, onchangeName, onchangeComment} from "../actions";

let App = (props) => {
    const {
        todos, addTodo, toggleTodo, onchangeName, onchangeComment
    } = props;

    return (
        <div class="main-widget">
            <TodoList todos = {todos} toggleTodo = {toggleTodo} />
            <AddTodo todos = {todos} addTodo = {addTodo} onchangeName = {onchangeName} onchangeComment = {onchangeComment}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todos: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: ([name, comment]) => dispatch(addTodo([name, comment])),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        onchangeName: (name) => dispatch(onchangeName(name)),
        onchangeComment: (comment) => dispatch(onchangeComment(comment))
    }
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;