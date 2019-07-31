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
    color: ${ props => props.blue ? '#00C2D4' : 'black' };
`

const Text = styled.p`
    font-size: ${theme.sizes.medium}
    font-family: 'Arial';
    display: 'block';
    text-align: 'left';
    font-weight: ${ props => props.bold ? 'bold' : 'normal' };
    color: ${theme.colors.black};
    text-transform: ${ props => props.uppercase ? 'uppercase' : 'lowercase'}
`

const ContentDiv = styled.div`
    height:50px;
`

const TestimonyTile = ({
    date,
    headline,
    description,
    buttonText,
    link
}) => {
    return (
        <Row>
            <Row>
                <Col md={12}>
                    <Text bold uppercase>
                        {date}
                    </Text>
                </Col>
                <Col md={12}>
                    <Title blue>
                        {headline}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ContentDiv>
                        <Text>
                            {description}
                        </Text>
                    </ContentDiv>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <LinkButton
                        description={buttonText}
                        url={link}
                        color='black'
                    />
                </Col>
            </Row>
        </Row>
    )

}

export default TestimonyTile
