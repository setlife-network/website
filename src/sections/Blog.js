import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import TestimonyTile from '../components/TestimonyTile'

const Section = styled.div`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
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
                            <Col md={4}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </Col>
                            <Col md={4}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </Col>
                            <Col md={4}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </Col>
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
