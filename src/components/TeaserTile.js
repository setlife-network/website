import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';


const Title = styled.p`
    font-size: ${theme.sizes.large};
    font-family: Arial;
    text-align: left
    padding-top: 10px;
    color: ${theme.colors.black};
`

const Text = styled.p`
    font-size: ${theme.sizes.medium}
    font-family: 'Arial';
    display: 'block';
    text-align: 'left';
    font-weight: normal;
    color: ${theme.colors.black};

`

const RectangleDiv = styled.div`
    height: 2px;
    background: ${theme.colors.primary};
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
`


const TeaserTile = ({
    headline,
    intro,
    buttonText,
    link
}) => {

    return (

        <Container>
        <Row>
            <Col md= {3}>
                <RectangleDiv/>
            </Col>
            <Col md={10}>
                <Title>
                    {headline}
                </Title>
            </Col>
            <Col md={20}>
                <Text>
                    {intro}
                </Text>
            </Col>
            <Col>
                <LinkButton
                    description={buttonText}
                    url={link}
                    color='black'
                />
            </Col>
        </Row>
        </Container>

    )
}

export default TeaserTile
