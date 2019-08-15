import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import TestimonyTile from '../components/TestimonyTile'
import FilledButton from '../components/FilledButton'
import Headline2 from '../components/Headline2'
import theme from '../styles/theme';

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
                                    headline='Lorem ipsum dolor sit amet sadipscing elitr.'
                                    color={theme.colors.black}
                                    weight='bold'
                                    alignment='left'
                                />
                            </Col>

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
                            <ButtonDiv md={2}>
                                <FilledButton
                                    url='url'
                                    description='Button'
                                />
                            </ButtonDiv>


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
