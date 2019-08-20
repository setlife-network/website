import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import DividerLine from './DividerLine'
import Title from './Title'
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
                <Title
                    size={theme.sizes.xlarge}
                    bold
                >
                    {headline1}
                </Title>
                <Title
                    size={theme.sizes.xlarge}
                    color={theme.colors.primary}
                    bold
                >
                    {headline2}
                </Title>
            </Col>
            <Wrapper md={10}>
                <Text
                    size={theme.sizes.regular}
                >
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
