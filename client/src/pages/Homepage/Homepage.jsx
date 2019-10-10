import React from 'react';
import {
    Button
} from 'antd';

import FormInput from './../../components/FormInput/FormInput';
import CustomButton from './../../components/CustomButton/CustomButton';

import './Homepage.scss';

const Homepage = () => (
    <div className='homepage-container'>
        <div className='logo-wrapper'>
            <h1>simple to-do.</h1>
        </div>
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
            <h2>in progress</h2>
        </div>
        <div className='items'>
            <h2>done</h2>
        </div>
    </div>
);

export default Homepage;