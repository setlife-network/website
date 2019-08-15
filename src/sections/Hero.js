import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

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
    render() {
        return (
            <Section>

                <Col md={1}>
                </Col>
                <Col md={10}>

                    <Section>
                        <Col md={6}>

                            <PrincipalMessage
                                headline1='Make software'
                                headline2='your superpower'
                                description='Learn valuable technical skills to help you upgrade your career – online, on your schedule.'
                            />

                        </Col>
                        <Col md={6}>
                            <ImageContainer src={HeroGraphic} alt='Hero Graphic' />
                        </Col>
                    </Section>
                    
                    <Row>
                        <Col md={4}>
                            <TeaserTile
                                headline='Tech Education'
                                intro='We’ll teach you the core concepts you need to understand technology and anticipate the impact of its exponential growth on your daily life'
                                buttonText='Core curriculum'
                                link='url'
                            />
                        </Col>
                        <Col md={4}>
                            <TeaserTile
                                headline='Project-based Learning'
                                intro='We’ll help you apply new knowledge directly to existing community projects (or help you start your own!) so that you can train your skills and gain valuable work experience'
                                buttonText='Explore projects'
                                link='url'
                            />
                        </Col>
                        <Col md={4}>
                            <TeaserTile
                                headline='Tech Education'
                                intro='We are committed to leveraging cutting-edge technology to your every advantage by creating tools that make development as simple as possible'
                                buttonText='Documentation'
                                link='url'
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={1}>
                </Col>

            </Section>
        )
    }
}

export default Hero
