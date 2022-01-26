
import React from 'react';
import { Routes, Route } from "react-router-dom";
import AddTodo from './Pages/AddTodo';
import EditTodo from './Pages/EditTodo';
import TodoList from './Pages/TodoList';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/add-todo" element={<AddTodo />} />
      <Route path="/todo/:id" element={<EditTodo />} />
      <Route path="/" element={<TodoList />} />
    </Routes>
  );
}

export default AppRoutes;