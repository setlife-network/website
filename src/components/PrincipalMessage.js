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

const TitleWrapper = styled(Title)`
    margin-bottom:-20px;
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
            <Col xs={2}>
                <DividerLine />
            </Col>
            <Col xs={12}>
                <TitleWrapper
                    size={theme.sizes.xlarge}
                    bold
                >
                    {headline1}
                </TitleWrapper>
                <Title
                    size={theme.sizes.xlarge}
                    color={theme.colors.primary}
                    bold
                >
                    {headline2}
                </Title>
            </Col>
            <Wrapper xs={12} md={10}>
                <Text
                    size={theme.sizes.regular}
                >
                    {description}
                </Text>
            </Wrapper>
            <Wrapper xs={8} md={4}>
                <FilledButton
                    description={buttonText}
                    url={url}
                />

            </Wrapper>
        </Row>
    )
}

export default PrincipalMessage
