import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import ValueTile from '../components/ValueTile'
import Headline from '../components/Headline'
import theme from '../styles/theme'
import BlankButton from '../components/BlankButton'
import PullOutTile from '../components/PullOutTile'

const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;

`

const WrapperFilled = styled(Row)`
    background:${theme.colors.primary};
    padding:50px
`

const WrapperBlank = styled(Row)`
background: ${theme.colors.grey}
    padding:50px
`


class PullOuts extends Component {
    render() {
        return (
            <Section>

                <Col md={12}>
                    <Row>
                        <Col md={6}>
                            <WrapperBlank>
                                <PullOutTile
                                    headline='Lorem ipsum dolor'
                                    intro='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

                                />
                            </WrapperBlank>
                            <WrapperFilled>
                                <PullOutTile
                                    headline='Lorem ipsum dolor'
                                    intro='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                                    color={theme.colors.white}
                                />
                            </WrapperFilled>
                        </Col>
                        <Col md={6}>
                            <WrapperFilled>
                                <PullOutTile
                                    headline='Lorem ipsum dolor'
                                    intro='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                                    color={theme.colors.white}
                                />
                            </WrapperFilled>
                            <WrapperBlank>
                                <PullOutTile
                                    headline='Lorem ipsum dolor'
                                    intro='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

                                />
                            </WrapperBlank>
                        </Col>
                    </Row>
                </Col>


            </Section>
        )
    }
}

export default PullOuts
