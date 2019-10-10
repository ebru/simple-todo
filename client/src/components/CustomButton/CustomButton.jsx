import React from 'react';
import { Button } from 'antd';

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <Button
            className='custom-button'
            {...otherProps}
        >
            {children}
        </Button>
    );
}

export default CustomButton;