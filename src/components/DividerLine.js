import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';


const DividerLine = styled(Row)`
    height: 1px;
    background: ${props => props.color};

`

DividerLine.defaultProps = {
    color: theme.colors.primary
}


export default DividerLine
