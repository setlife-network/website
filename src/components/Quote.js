import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import DividerLine from './DividerLine';
import Title2 from './Title2';
import Text from './Text';
import QuoteIcon from '../assets/images/quote.png'

const Wrapper = styled(Col)`
    heigh:50%;

`

const ImageContainer = styled(Image)`
    align:center;
    width: 50%;


`

const Quote = ({
    headline,
    author,
    company
}) => {
    return (
        <Row>
            <Col md={6}>
                <ImageContainer src={QuoteIcon} alt='quote' />
            </Col>
            <Col md={6}>
                <Row>
                    <Col md={12}>
                        <Title2 left blue>
                            {headline}
                        </Title2>
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
    )
}

export default Quote
