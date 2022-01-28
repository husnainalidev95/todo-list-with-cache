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
    const { name, value } = e.target;
    setSelectedTodoItem({
      ...selectedTodoItem,
      [name]: value
    });
  };

  const handleAddItemClick = async () => {
    const result = await updateItemInTodoList(selectedTodoItem);
    if (result) {
      navigate('/');
    };
  };

  return (
    <div className='flex flex-col w-25'>
      <h2>Edit Todo Item</h2>
      <div className='flex'>
        <Input placeholder='Write something' name='text' value={selectedTodoItem && selectedTodoItem.text} onChange={handleTodoTextChange} />
        <Button type='primary' value='Edit' onClick={handleAddItemClick} />
      </div>
    </div>
  );
}

export default EditTodo;