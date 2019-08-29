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

const WrapperCard = styled(Row)`
    background: ${theme.colors.white};
    padding-top:10px;
    padding-bottom:10px;

`

const ImageContainer = styled('div')`
    height: 120px;
    width: 100%;
    border-radius: 1000vw;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`

const TitleWrapper = styled(Col)`
    height:100px

`

const DividerWrapper = styled(Col)`
    margin-left: -15px

`


const ProgramCard = ({
    headline,
    description,
    color,
    buttonText,
    link,
    image
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
                    size={theme.sizes.medium}
                >
                    {headline}
                </Title>
            </TitleWrapper>
            <Col md={4}>
                <ImageContainer
                    style={{ backgroundImage: `url(${image})` }}
                />
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
