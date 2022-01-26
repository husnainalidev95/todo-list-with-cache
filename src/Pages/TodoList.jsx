import React from 'react';
import { Table, Space } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

function TodoList() {
  const columns = [
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
          <Button type='secondary' icon={<EditTwoTone />} />
          <Button type='secondary' icon={<DeleteTwoTone twoToneColor='#ff4d4f' />} />
        </Space>
      ),
    }
  ];

  const data = [
    {
      key: '1',
      id: '1',
      text: 'Todo Item 1',
      date: new Date().toDateString()
    },
    {
      key: '2',
      id: '2',
      text: 'Todo Item 2',
      date: new Date().toDateString()
    },
    {
      key: '3',
      id: '3',
      text: 'Todo Item 3',
      date: new Date().toDateString()
    },
  ];
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <h2>Todo List</h2>
        <Link to='/add-todo'>
          <Button type='primary' value='Add Todo Item' />
        </Link>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default TodoList;