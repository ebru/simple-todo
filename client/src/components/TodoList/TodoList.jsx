import React from 'react';

import FormInput from './../../components/FormInput/FormInput';
import CustomButton from './../../components/CustomButton/CustomButton';

import './TodoList.scss';

const TodoList = () => (
    <div className='todo-list-container'>
        <div className='add-item-wrapper'>
            <form className='add-item-form'>
                <FormInput
                    label='Add new item'
                    value=''
                    required
                />
            </form>
            <CustomButton
                type='primary'
                icon='plus'
                size='large'
                shape='circle'
                style={{ backgroundColor: '#595bb9', border: 'None' }}
            />
        </div>
        <div className='items'>
            {/* <h2>items</h2> */}
        </div>
    </div>
);

export default TodoList;