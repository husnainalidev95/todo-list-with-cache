import React, { useMemo } from 'react';
import { Table, Space } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import useTodoList from '../hooks/useTodoList';

function TodoList() {
  const navigate = useNavigate();

  const { todoList, deleteItemInTodoList } = useTodoList();
  const columns = useMemo(() => [
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Date/Time',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <Button type='secondary' icon={<EditTwoTone />} onClick={() => navigate(`/update-todo/${record.key}`)} />
          <Button type='secondary' icon={<DeleteTwoTone twoToneColor='#ff4d4f' />} onClick={() => deleteItemInTodoList(record.key)} />
        </Space>
      ),
    }
  ], [todoList]);

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <h2>Todo List</h2>
        <Link to='/add-todo'>
          <Button type='primary' value='Add Todo Item' />
        </Link>
      </div>
      <Table columns={columns} dataSource={todoList} pagination={false} />
    </div>
  );
}

export default TodoList;