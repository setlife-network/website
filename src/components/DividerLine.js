import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import Title from '../typography/Title';
import Text from '../typography/Text';

const RectangleDiv = styled.div`
    height: 2px;
    background: ${theme.colors.primary};
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
`

const DividerLine = ({
    color
}) => {
    return (
        <Col md={3}>
            <RectangleDiv />
        </Col>
    )
}

export default DividerLine
