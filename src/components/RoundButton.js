import React, { Component } from 'react';
import { Button } from 'antd';

const RoundButton = ({
    buttonText,
    onClick
}) => {
    return (
        <Button
            className='RoundButton'
            type='primary'
            shape='round'
            onClick={onClick}
        >
            {buttonText}
        </Button>
    )
}

export default RoundButton