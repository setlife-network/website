import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import TestimonyTile from '../components/TestimonyTile'
import RoundButton from '../components/RoundButton'
import Quote from '../components/Quote'

const Section = styled.div`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`

const TestimonyDiv = styled(Col)`
    margin-bottom:50px
`

class Blog extends Component {
    render() {
        return (
            <Section>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <TestimonyDiv md={4}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </TestimonyDiv>
                            <TestimonyDiv md={4}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </TestimonyDiv>
                            <TestimonyDiv md={4}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </TestimonyDiv>
                            <TestimonyDiv md={4}>
                                <TestimonyTile
                                    portrait='hello'
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </TestimonyDiv>
                            <TestimonyDiv md={4}>
                                <TestimonyTile
                                    portrait='hello'
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </TestimonyDiv>
                            <TestimonyDiv md={4}>
                                <TestimonyTile
                                    portrait='hello'
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </TestimonyDiv>
                            <Quote
                                headline='Setlife helps you discover computer programming, learn about jobs available to programmers and get started building programming skills.'
                                author='Marin Basic'
                                company='CEO at branding.studio'
                            />

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
