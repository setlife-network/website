import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import DividerLine from './DividerLine'
import Title1 from './Title1'
import Text from './Text';
import FilledButton from './FilledButton'

const Wrapper = styled(Col)`
    margin-top:30px;

`

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
            <Wrapper md={10}>
                <Text>
                    {description}
                </Text>
            </Wrapper>
            <Wrapper md={4}>
                <FilledButton
                    url='url'
                    description='Start Learning'
                />

            </Wrapper>
        </Row>
    )
}

export default PrincipalMessage
