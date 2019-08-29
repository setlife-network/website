import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import constants, { TEASERS, PRINCIPALMESSAGE } from '../constants'

import TeaserTile from '../components/TeaserTile';
import LinkButton from '../components/LinkButton';
import PrincipalMessage from '../components/PrincipalMessage'
import HeroGraphic from '../assets/images/heroGraphic.png'

const Section = styled(Row)`
    padding-top: 50px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`

const Wrapper = styled(Col)`
    height:80px
`

const ImageContainer = styled(Image)`
    height: 100%;
    width: 100%;


`

class Hero extends Component {

    renderPrincipalMessage = () => {
        return PRINCIPALMESSAGE.map(t => {
            return (
                <Col md={{ order: 1 }} xs={{ order: 2 }}>
                    <PrincipalMessage
                        headline1={t.headline1}
                        headline2={t.headline2}
                        description={t.description}
                        buttonText={t.buttonText}
                        url={t.url}
                    />

                </Col>
            )
        })
    }

    renderTeaser = () => {
        return TEASERS.map(t => {
            return (
                <Col md={4}>
                    <TeaserTile
                        headline={t.headline}
                        intro={t.description}
                        buttonText={t.linkTitle}
                        link={t.url}
                    />
                </Col>
            )
        })
    }

    render() {
        return (
            <Section>

                <Col xs={10} className='mx-auto'>
                    <Section>
                        {this.renderPrincipalMessage()}
                        <Col md={{ order: 2 }} xs={{ order: 1 }}>
                            <ImageContainer src={HeroGraphic} alt='Hero Graphic' />
                        </Col>
                    </Section>

                    <Row>
                        {this.renderTeaser()}
                    </Row>
                </Col>

            </Section>
        )
    }
}

export default Hero
