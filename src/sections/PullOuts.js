import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import PullOutImage from '../assets/images/pullOutImage.png'

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

    padding:50px;
    background-image: url(${PullOutImage});
    background-size: cover;
    box-shadow:inset 0 0 0 2000px rgba(0,194,212,0.7);


`

const Wrapper = styled(Row)`
    background: ${theme.colors.primary}
`

const WrapperBlank = styled(Row)`
    background: ${theme.colors.grey}
    padding:50px
`


class PullOuts extends Component {
    render() {
        return (
            <Section>

                <Col md={6}>
                    <WrapperBlank>
                        <PullOutTile
                            headline='Lorem ipsum dolor'
                            intro='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

                        />
                    </WrapperBlank>
                </Col>
                <Col md={6}>
                    <WrapperFilled>
                        <PullOutTile
                            headline='Lorem ipsum dolor'
                            intro='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                            color={theme.colors.white}
                        />
                    </WrapperFilled>
                </Col>
                <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 12 }}>
                    <WrapperFilled>
                        <PullOutTile
                            headline='Lorem ipsum dolor'
                            intro='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                            color={theme.colors.white}
                        />
                    </WrapperFilled>
                </Col>
                <Col md={{ span: 6, order: 2 }} xs={{ order: 1 }}>
                    <WrapperBlank>
                        <PullOutTile
                            headline='Lorem ipsum dolor'
                            intro='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

                        />
                    </WrapperBlank>
                </Col>

            </Section>
        )
    }
}

export default PullOuts
