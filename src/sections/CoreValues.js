import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import ValueTile from '../components/ValueTile'
import Headline from '../components/Headline'
import theme from '../styles/theme';

const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`


class CoreValues extends Component {

    renderHeadline = () => {
        const { COREVALUESHEADLINE } = this.props.content
        return COREVALUESHEADLINE.map(t => {
            return (
                <Col xs={12} key={t.key}>
                    <Headline
                        headline={t.headline}
                        color={theme.colors.black}
                        weight='bold'
                        alignment='center'
                    />
                </Col>
            )
        })
    }

    renderValues = () => {
        const { COREVALUES } = this.props.content
        return COREVALUES.map(t => {
            return (
                <Col md={6} key={t.key}>
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
                        {this.renderHeadline()}
                        {this.renderValues()}
                    </Row>
                </Col>


            </Section>
        )
    }
}

export default CoreValues
