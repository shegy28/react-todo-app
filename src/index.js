import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer"

//components files
ReactDOM.render(
    <React.StrictMode>
        <TodoContainer/>
    </React.StrictMode>, 
    document.getElementById("root")
)