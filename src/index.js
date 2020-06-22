import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
 
import movies from './reducers/index';
const store=createStore(movies);

console.log(store.getState());
console.log(store.getState());



ReactDOM.render(<App store={store} />, document.getElementById("root"));
