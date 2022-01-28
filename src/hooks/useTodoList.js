import React, { useState, useEffect } from 'react';

export default function useTodoList(todoItemKey) {
  const CACHE_NAME = "todo-list";
  const ENDPOINT = "https://localhost:3000";

  const [todoList, setTodoList] = useState([]);

  const [selectedTodoItem, setSelectedTodoItem] = useState({});

  useEffect(() => {
    const todoItem = todoList.find(item => item.key === parseInt(todoItemKey));
    setSelectedTodoItem(todoItem);
  }, [todoList]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        const response = await cache.match(ENDPOINT);

        if (!response) {
          return;
        }

        const responseBody = await response.json();
        setTodoList(responseBody);
      } catch (error) {
        console.log("getToken error:", { error });
      }
    };
    getTodoList();
  }, []);

  const addItemInTodoList = async (data) => {
    const updatedTodoList = [...todoList, data]
    try {
      const cache = await caches.open(CACHE_NAME);
      const responseBody = JSON.stringify(updatedTodoList);
      const response = new Response(responseBody);
      await cache.put(ENDPOINT, response);
      return true;
    } catch (error) {
      console.log("saveToken error:", { error });
      return false;
    }
  };

  const updateItemInTodoList = async (data) => {
    let updatedTodoList = todoList.filter(item => item.key !== data.key);
    updatedTodoList = [...updatedTodoList, data];
    updatedTodoList = updatedTodoList.sort((a, b) => new Date(a.date) - new Date(b.date));
    try {
      const cache = await caches.open(CACHE_NAME);
      const responseBody = JSON.stringify(updatedTodoList);
      const response = new Response(responseBody);
      await cache.put(ENDPOINT, response);
      return true;
    } catch (error) {
      console.log("saveToken error:", { error });
    }
  };

  const deleteItemInTodoList = async (todoItemKey) => {
    const updatedTodoList = todoList.filter(item => item.key !== todoItemKey);
    try {
      const cache = await caches.open(CACHE_NAME);
      const responseBody = JSON.stringify(updatedTodoList);
      const response = new Response(responseBody);
      await cache.put(ENDPOINT, response);
      setTodoList(updatedTodoList);
    } catch (error) {
      console.log("saveToken error:", { error });
    }
  };

  return { todoList, addItemInTodoList, updateItemInTodoList, deleteItemInTodoList, selectedTodoItem, setSelectedTodoItem };
}
