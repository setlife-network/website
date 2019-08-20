import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Title from './Title';
import Text from './Text';
import DividerLine from './DividerLine'

import SDFundamentals from '../assets/images/SDFundamentals.png'


const WrapperCard = styled(Row)`
    background: ${theme.colors.white};
    padding-top:10px
    padding-bottom:10px;

`


const ImageContainer = styled(Image)`
    height: 70%;
    width70%;
    margin-left: auto;
    margin-right: auto;
    display: block;
`


const ProgramCard = ({
    headline,
    description,
    color,
    buttonText,
    link
}) => {
    return (


        <WrapperCard>
            <Col md={2}>
                <DividerLine
                    color={theme.colors.grey}
                />
            </Col>
            <Col md={12}>
                <Title
                    size={theme.sizes.medium}
                >
                    {headline}
                </Title>
            </Col>
            <Col md={4}>
                <ImageContainer src={SDFundamentals} alt='Software development Fundamentals' />
            </Col>
            <Col md={7}>
                <Text
                    size={theme.sizes.small}
                >
                    {description}
                </Text>
                <LinkButton
                    description={buttonText}
                    url={link}
                    color={color}
                >
                    {buttonText}
                </LinkButton>
            </Col>

        </WrapperCard>


    )

}

export default ProgramCard
