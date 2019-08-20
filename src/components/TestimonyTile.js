import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Title from './Title';
import Text from './Text';

import Portrait from '../assets/images/portrait.png'


const ContentDiv = styled(Col)`
    height:100px;

`

const ImageContainer = styled(Image)`
    height: 100%;
    width: 100%;



`

const TestimonyTile = ({
    portrait,
    date,
    headline,
    description,
    buttonText,
    link
}) => {
    return (
        <Row>
            {
                portrait != null
                && (
                    <Col md={12}>
                        <ImageContainer src={Portrait} alt='Portrait' />
                    </Col>
                )
            }
            <Col md={6}>
                <Text
                    weight='bold'
                    uppercase
                >
                    {date}
                </Text>
            </Col>
            <Col md={12}>
                <Title
                    bold
                    color={theme.colors.primary}
                    size={theme.sizes.medium}
                >
                    {headline}
                </Title>
            </Col>
            <ContentDiv md={12}>
                <Text>
                    {description}
                </Text>
            </ContentDiv>
            <Col md={3}>
                <LinkButton
                    description={buttonText}
                    url={link}
                    color={theme.colors.black}
                    weight='bold'
                />
            </Col>
        </Row>

    )

}

export default TestimonyTile
