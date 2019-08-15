import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';

const RoundedButton = styled.button`
    background: ${props => props.transparent ? theme.colors.transparent : theme.colors.primary};

    height:100px;


`

RoundedButton.defaultProps = {
    transparent: false,

}

const RoundButton = ({
    buttonText,
    onClick
}) => {
    return (
        <RoundedButton
            onClick={onClick}
        >
            {buttonText}
        </RoundedButton>
    )
}

export default RoundButton
