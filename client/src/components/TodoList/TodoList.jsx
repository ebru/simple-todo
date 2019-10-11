<<<<<<< HEAD
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchItemsStartAsync } from './../../redux/todo/todo.actions';
import { selectItems } from './../../redux/todo/todo.selectors';

import AddItemForm from './../AddItemForm/AddItemForm';
import ItemsList from './../ItemsList/ItemsList';

import './TodoList.scss';

const TodoList = props => {
    const { fetchItemsStartAsync, items } = props;

    useEffect(() => {
        fetchItemsStartAsync();
    }, [fetchItemsStartAsync]);

    return (
        <div className='todo-list-container'>
            <AddItemForm />
            <ItemsList items={items} />
=======
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
>>>>>>> master
        </div>
    )
};

<<<<<<< HEAD
const mapStateToProps = createStructuredSelector({
    items: selectItems
});

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsStartAsync: () => dispatch(fetchItemsStartAsync())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
=======
export default TodoList;
>>>>>>> master
