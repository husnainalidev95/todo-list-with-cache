import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useTodoList from '../hooks/useTodoList';
import Button from '../Components/Button';
import Input from '../Components/Input';

function EditTodo() {
  const params = useParams();
  const navigate = useNavigate();

  const { selectedTodoItem, setSelectedTodoItem, updateItemInTodoList } = useTodoList(params.todoItemKey);

  const handleTodoTextChange = (e) => {
    if (e.key === 'Enter') {
      handleUpdateItemClick();
      return;
    };
    const { name, value } = e.target;
    setSelectedTodoItem({
      ...selectedTodoItem,
      [name]: value
    });
  };

  const handleUpdateItemClick = async () => {
    const result = await updateItemInTodoList(selectedTodoItem);
    if (result) {
      navigate('/');
    };
  };

  return (
    <div className='flex flex-col w-25'>
      <h2>Edit Todo Item</h2>
      <div className='flex'>
        <Input placeholder='Write something' name='text' value={selectedTodoItem && selectedTodoItem.text} onChange={handleTodoTextChange} onKeyPress={handleTodoTextChange} />
        <Button type='primary' value='Edit' onClick={handleUpdateItemClick} />
      </div>
    </div>
  );
}

export default EditTodo;