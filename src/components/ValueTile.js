import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';
import BlueArrow from '../assets/images/blueArrow.png'

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

const ContentDiv = styled.div`
    height:80px;
`

const ValueTile = ({
    headline,
    description
}) => {
    return (
        <Row>
            <Col md={2}>
                <img src={BlueArrow} alt='Blue Arrow' />
            </Col>
            <Col md={10}>
                <Row>
                    <Col md={12}>
                        <Title>
                            {headline}
                        </Title>
                    </Col>
                    <Col md={12}>
                        <ContentDiv>
                            <Text>
                                {description}
                            </Text>
                        </ContentDiv>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ValueTile
