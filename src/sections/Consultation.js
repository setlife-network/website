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
                                        headline='Tech Careers'
                                        color={theme.colors.white}
                                        description='TechPrep by Facebook is one of the many resources available to start exploring how technology can help upgrade your career'
                                        alignment='right'
                                    />
                                </Col>
                            </Row>

                            <Wrapper md={5}>
                                <BlankButton
                                    url='https://techprep.org/'
                                    description='Learn more'
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
