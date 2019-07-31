import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import ValueTile from '../components/ValueTile'

const Section = styled.div`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`

class CoreValues extends Component {
    render() {
        return (
            <Section>
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={10}>
                        <Row type='flex' justify='space-around'>
                            <Col md={5}>
                                <ValueTile
                                    headline='Intellectual Freedom'
                                    description='It is the right of every individual to both seek and receive information from all points of view without restriction'
                                />
                                <ValueTile
                                    headline='Learn by Teaching'
                                    description='The deepest understanding of a topic comes when you can teach anyone willing to learn by adapting ideas to their specific educational context'
                                />
                            </Col>

                            <Col md={5}>
                                <ValueTile
                                    headline='Open-source software "libre"'
                                    description='To promote true "freedom", users must be able to run software such that it can be studied, changed, adapted, and distributed in any variation'
                                />
                                <ValueTile
                                    headline='Open-source software "libre"'
                                    description='To promote true "freedom", users must be able to run software such that it can be studied, changed, adapted, and distributed in any variation'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Section>
        )
    }
}

export default CoreValues
