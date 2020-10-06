import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/app"
import { createStore } from "redux";
import todos from "./reducers";

const initialState = {
  comments: [
    {id:0, comment: "Отличное место", name:"Паша", date: "11.07.2020"},
    {id:1, comment: "Видел там павлинов", name:"Боб", date: "12.07.2020"},
    {id:2, comment: "А какие закаты", name:"Джон", date: "12.07.2020"}],
  form: {
    name: '',
    comment: ''
  }
};

const store = createStore(todos, localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState);

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
})

ReactDOM.render(
    <App store={store}/>,
    document.querySelector("#app")
)