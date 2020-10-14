import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/app"
import { createStore } from "redux";
import todos from "./reducers";

const initialState = {
  comments: [
    {id:0, comment: "Лучше гор могут быть только горы, на которых еще не бывал.", name:"Владимир Высоцкий", date: "11.08.2020"},
    {id:1, comment: "К ночи эти горы будут кишить орками. Надо успеть в леса Лотлориена. Идём Боромир. Леголас. Гимли.", name:"Арагорн", date: "15.09.2020"},
    {id:2, comment: "Горы зовут, и я должен идти!", name:"Джон Мьюр", date: "23.10.2020"}],
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