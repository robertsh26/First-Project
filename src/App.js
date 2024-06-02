import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build a to-do app', isCompleted: false },
    { text: 'Share it with the world', isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
