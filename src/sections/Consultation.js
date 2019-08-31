import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Image, Row, Col
} from 'react-bootstrap';

import { CONSULTATIONHEADLINE, CONSULTATIONBUTTON } from '../constants'

import ConsultationPhoto from '../assets/images/consultationPhoto.png'

import Headline from '../components/Headline'
import theme from '../styles/theme';
import BlankButton from '../components/BlankButton'

const Section = styled(Row)`

    background: ${theme.colors.primary};
    height:380px

`

const Wrapper = styled(Col)`

    float: right;


`

const ButtonWrapper = styled(Col)`

    float: right;

`

const ImageContainer = styled(Image)`


    left: 50px;
    position: absolute;
    top: 0;
    height: 380px;
    width: 100%;
    opacity: 0.8;
    transform: skew(15deg,0deg);

`

const OutContainer = styled(Col)`

    position: absolute;
    margin-left: -10%;
    min-height: 380px;
    overflow: hidden;
    transform: skew(-15deg,0deg);
    background: ${theme.colors.primary}
`

const ColDiv = styled(Col)`

    padding:20px
`

class Consultation extends Component {

    renderHeadline = () => {
        return CONSULTATIONHEADLINE.map(t => {
            return (
                <Row key={t.key}>
                    <Wrapper md={12}>
                        <Headline
                            headline={t.headline}
                            color={theme.colors.white}
                            description={t.description}
                            alignment='right'
                        />
                    </Wrapper>
                </Row>
            )
        })
    }

    renderButton = () => {
        return CONSULTATIONBUTTON.map(t => {
            return (
                <ButtonWrapper md={5} xs={12} key={t.key}>
                    <BlankButton
                        url={t.url}
                        description={t.description}
                    />

                </ButtonWrapper>
            )
        })
    }

    render() {
        return (
            <Section>

                <Col md={11}>
                    <Row>
                        <Col md={6} className='d-none d-md-flex'>
                            <OutContainer md={12}>
                                <ImageContainer src={ConsultationPhoto} alt='Photo' />
                            </OutContainer>
                        </Col>
                        <ColDiv md={6}>
                            {this.renderHeadline()}
                            {this.renderButton()}
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
