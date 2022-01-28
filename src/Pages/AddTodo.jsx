import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTodoList from '../hooks/useTodoList';
import Button from '../Components/Button';
import Input from '../Components/Input';

function AddTodo() {
  const navigate = useNavigate();
  
  const { todoList, addItemInTodoList } = useTodoList();
  const [todoText, setTodoText] = useState('');

  const handleTodoTextChange = (e) => {
    if(e.key === 'Enter') {
      handleAddItemClick();
      return;
    };
    setTodoText(e.target.value);
  };

  const handleAddItemClick = async () => {
    let data = {
      key: todoList.length + 1,
      text: todoText,
      date: new Date().toLocaleString()
    };
    const result = await addItemInTodoList(data);
    if (result) {
      navigate('/');
    }
  };

  return (
    <div className='flex flex-col w-25'>
      <h2>Add Todo Item</h2>
      <div className='flex'>
        <Input placeholder='Write something' value={todoText} onChange={handleTodoTextChange} onKeyPress={handleTodoTextChange} />
        <Button type='primary' value='Add' onClick={handleAddItemClick} />
      </div>
    </div>
  );
}

export default AddTodo;