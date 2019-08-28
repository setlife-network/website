import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import ConsultationPhoto from '../assets/images/consultationPhoto.png'

import ValueTile from '../components/ValueTile'
import Headline from '../components/Headline'
import theme from '../styles/theme';
import BlankButton from '../components/BlankButton'

const Section = styled(Row)`

    background: ${theme.colors.primary};
    height:360px

`

const Wrapper = styled(Col)`

    float: right;
    height:280px

`

const ButtonWrapper = styled(Col)`

    float: right;

`

const ImageContainer = styled(Image)`


    left: 50px;
    position: absolute;
    top: 0;
    height: 360px;
    width: 100%;
    opacity: 0.8;
    transform: skew(15deg,0deg);

`

const OutContainer = styled(Col)`

    position: absolute;
   margin-left: -10%;
   min-height: 360px;
   overflow: hidden;
   transform: skew(-15deg,0deg);
   background: ${theme.colors.primary}
`

const ColDiv = styled(Col)`

    padding:20px
`

class Consultation extends Component {
    render() {
        return (
            <Section>

                <Col md={11}>
                    <Row>
                        <Col xs={0} md={6}>
                            <OutContainer md={12} xs={0}>
                                <ImageContainer src={ConsultationPhoto} alt='Photo' />
                            </OutContainer>
                        </Col>
                        <ColDiv md={6}>
                            <Row>
                                <Wrapper md={12}>
                                    <Headline
                                        headline='Make software your superpower'
                                        color={theme.colors.white}
                                        description='Because learning to code might be the smartest investment to make.'
                                        alignment='right'
                                    />
                                </Wrapper>
                            </Row>

                            <ButtonWrapper md={5} xs={6}>
                                <BlankButton
                                    url='url'
                                    description='Get free consultation'
                                />

                            </ButtonWrapper>
                        </ColDiv>
                    </Row>
                </Col>
                <Col md={1}>
                </Col>
            </Section>
        )
    }
}

export default Consultation
