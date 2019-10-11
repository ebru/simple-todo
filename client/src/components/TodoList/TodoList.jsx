import React, { useState } from 'react';
import { Form } from 'antd';

import FormInput from './../../components/FormInput/FormInput';
import CustomButton from './../../components/CustomButton/CustomButton';

import './TodoList.scss';

const TodoList = () => {
    const [item, setItem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting item ${item}`)
    }

    return (
        <div className='todo-list-container'>
            <Form className='add-item-form' onSubmit={handleSubmit}>
                <FormInput
                    label='Add new item'
                    value={item}
                    onChange={event => setItem(event.target.value)}
                    required
                />
                <CustomButton
                    type='primary'
                    htmlType='submit'
                    icon='plus'
                    size='large'
                    shape='circle'
                    style={{ backgroundColor: '#595bb9', border: 'None' }}
                />
            </Form>
            <div className='items'>
                {/* <h2>items</h2> */}
            </div>
        </div>
    )
};

export default TodoList;