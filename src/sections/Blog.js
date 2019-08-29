import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import TestimonyTile from '../components/TestimonyTile'
import FilledButton from '../components/FilledButton'
import Headline2 from '../components/Headline2'
import theme from '../styles/theme';


import constants, { TESTIMONIALS } from '../constants'

const Section = styled.div`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`

const TestimonyDiv = styled(Col)`
    margin-bottom:50px
`
const ButtonDiv = styled(Col)`
    margin: auto;
    margin-bottom:50px


`

class Blog extends Component {
    
    renderTestimonials = () => {
        return TESTIMONIALS.map(t => {
            return (
                <TestimonyDiv md={4}>
                    <TestimonyTile
                        date={t.date}
                        headline={t.name}
                        description={t.quote}
                        portrait={t.portrait}
                    />
                </TestimonyDiv>
            )
        })
    }

    render() {
        return (
            <Section>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={12}>
                                <Headline2
                                    headline='About Us'
                                    color={theme.colors.black}
                                    weight='bold'
                                    alignment='left'
                                />
                            </Col>

                            {this.renderTestimonials()}


                        </Row>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
            </Section>
        )
    }
}

export default Blog
