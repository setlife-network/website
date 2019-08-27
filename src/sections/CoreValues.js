import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import constants, { COREVALUES } from '../constants'

import ValueTile from '../components/ValueTile'
import Headline from '../components/Headline'
import theme from '../styles/theme';

const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`


class CoreValues extends Component {

    renderValues = () => {
        return COREVALUES.map(t => {
            return (
                <Col md={6}>
                    <ValueTile
                        headline={t.headline}
                        description={t.description}
                    />

                </Col>
            )
        })
    }

    render() {
        return (
            <Section>


                <Col xs={8} className='mx-auto'>
                    <Row>
                        <Col xs={12}>
                            <Headline
                                headline='Core Values'
                                color={theme.colors.black}
                            />
                        </Col>
                        {this.renderValues()}
                    </Row>
                </Col>


            </Section>
        )
    }
}

export default CoreValues
