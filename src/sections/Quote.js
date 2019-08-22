import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import DividerLine from '../components/DividerLine';
import Title from '../components/Title';
import Text from '../components/Text';
import QuoteIcon from '../assets/images/quote.png'

const Wrapper = styled(Col)`
    heigh:50%;

`

const ImageContainer = styled(Image)`
    align:center;
    width: 50%;
`

const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;

`

const Quote = ({
    headline,
    author,
    company
}) => {
    return (
        <Section>
            <Col md={1}>
            </Col>
            <Col md={10}>
                <Row>
                    <Col md={6}>
                        <ImageContainer src={QuoteIcon} alt='quote' />
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={12}>
                                <Title
                                    left
                                    color={theme.colors.primary}
                                    size={theme.sizes.quote}
                                >
                                    {headline}
                                </Title>
                            </Col>
                            <Col md={2}>
                                <DividerLine />
                            </Col>
                            <Col md={12}>
                                <Text>
                                    {author}
                                </Text>
                                <Text>
                                    {company}
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col md={1}>
            </Col>
        </Section>
    )
}

export default Quote
