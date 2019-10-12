import React, { useState } from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux';

import { addItemStartAsync } from './../../redux/todo/todo.actions';

import FormInput from './../../components/FormInput/FormInput';
import CustomButton from './../../components/CustomButton/CustomButton';

import './AddItemForm.scss';

const AddItemForm = ({ addItemStartAsync }) => {
    const [itemTitle, setItemTitle] = useState('');

    const item = {
        title: itemTitle,
        completed: false
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (!itemTitle.trim()) {
            alert('Please enter an item.');
            return;
        }

        addItemStartAsync(item);
        setItemTitle('');
    };

    return (
        <Form className='add-item-form' onSubmit={handleSubmit}>
            <FormInput
                label='Add new item'
                value={itemTitle}
                onChange={event => setItemTitle(event.target.value)}
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
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addItemStartAsync: item => dispatch(addItemStartAsync(item))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(AddItemForm);