import React, { useState, useEffect } from 'react';

export default function useTodoList() {
  const [todoList, setTodoList] = useState([]);

  return todoList;
}
