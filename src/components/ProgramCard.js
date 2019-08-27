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
    margin-top:30px;
    padding-top:10px
    padding-bottom:10px;


`

const ImageContainer = styled(Image)`
    height: 70%;
    margin-left: auto;
    margin-right: auto;
    display: block;
`

const TitleWrapper = styled(Col)`
    height:120px

`

const ConstantWrapper = styled(Col)`
    height:120px

`

const DividerWrapper = styled(Col)`
    margin-left: -15px

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
            <DividerWrapper md={2}>
                <DividerLine
                    color={theme.colors.grey}
                />
            </DividerWrapper>
            <TitleWrapper md={12}>
                <Title
                    bold
                    size={theme.sizes.medium}
                >
                    {headline}
                </Title>
            </TitleWrapper>
            <Col md={4}>
                <ImageContainer src={SDFundamentals} alt='Software development Fundamentals' />
            </Col>
            <ConstantWrapper md={7}>
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
            </ConstantWrapper>

        </WrapperCard>


    )

}

export default ProgramCard
