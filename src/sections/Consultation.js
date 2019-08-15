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

    float: right
`

const ImageContainer = styled(Image)`


    left: 50px;
    position: absolute;
    top: 0;
    height: 360px;
    width: 100%;
    transform: skew(15deg,0deg);
`

const OutContainer = styled(Col)`

    position: absolute;
   margin-left: -10%;
   min-height: 360px;
   overflow: hidden;
   transform: skew(-15deg,0deg);
`

const ColDiv = styled(Col)`

    padding:50px
`

class Consultation extends Component {
    render() {
        return (
            <Section>

                <Col md={11}>
                    <Row>
                        <Col md={6}>
                            <OutContainer>
                                <ImageContainer src={ConsultationPhoto} alt='Photo' />
                            </OutContainer>
                        </Col>
                        <ColDiv md={6}>
                            <Row>
                                <Col md={12}>
                                    <Headline
                                        headline='Make software your superpower'
                                        color={theme.colors.white}
                                        description='Because learning to code might be the smartest investment to make.'
                                        alignment='right'
                                    />
                                </Col>
                            </Row>

                            <Wrapper md={5}>
                                <BlankButton
                                    url='url'
                                    description='Get free consultation'
                                />

                            </Wrapper>
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
