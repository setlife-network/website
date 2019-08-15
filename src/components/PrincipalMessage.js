import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import DividerLine from './DividerLine'
import Title1 from './Title1'
import Text from './Text';

const PrincipalMessage = ({
    headline1,
    headline2,
    description,
    buttonText,
    url
}) => {
    return (
        <Row>
            <Col md={2}>
                <DividerLine />
            </Col>
            <Col md={12}>
                <Title1>
                    {headline1}
                </Title1>
                <Title1 blue>
                    {headline2}
                </Title1>
            </Col>
            <Col md={8}>
                <Text>
                    {description}
                </Text>
            </Col>
            <Col md={5}>
            </Col>
        </Row>
    )
}

export default PrincipalMessage
