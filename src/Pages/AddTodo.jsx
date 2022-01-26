import React, { useState } from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';

function AddTodo() {
  const [todoText, setTodoText] = useState('');

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddItemClick = () => {
    
  };

  return (
    <div className='flex flex-col w-25'>
      <h2>Add Todo Item</h2>
      <div className='flex'>
        <Input placeholder='Write something' value={todoText} onChange={handleTodoTextChange} />
        <Button type='primary' value='Add' onClick={handleAddItemClick} />
      </div>
    </div>
  );
}

export default AddTodo;