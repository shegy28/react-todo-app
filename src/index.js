import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer"
import "./App.css"

//components files
ReactDOM.render(
    <React.StrictMode>
        <TodoContainer/>
    </React.StrictMode>, 
    document.getElementById("root")
)