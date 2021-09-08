import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodos } from "./MyComponents/AddTodos";
import {About} from "./MyComponents/About"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("This is deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
  };
  const addTodo = (title, desc) => {
    console.log("I am adding Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      // -1 because index starts from 0
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    // This function is for updating the todos and ...is ES 6 spread operator that will assign todos sno and than mytodo

    // When calling setTodos it doesnot change todos immediately so after immediately writing  localStorage.setItem('todos',JSON.stringify(todos)); this after setTodos it might have not changed completly and stored in the local storage for this we will use useEffect hook and its syntax is like this useEffect(() => {
    //   effect
    //   return () => {
    //     cleanup
    //   }
    // }, [input])

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  // this is use state hook.Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.This prevents writing of this state and all that mess of creating a class
  const [todos, setTodos] = useState(initTodo);

  // This will prevent the problem
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {/* This is a parent element for all of these. So a value passed here can be used as a props in the child element */}
      <Router>
      <Header title="My TodosList" searchbar={false} />

       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
          <AddTodos addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
