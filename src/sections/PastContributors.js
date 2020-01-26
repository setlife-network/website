import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import PastContributorTile from '../components/PastContributorTile'
import FilledButton from '../components/FilledButton'
import Headline from '../components/Headline'
import theme from '../styles/theme';

const Section = styled.div`

    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`

class PastContributors extends Component {

    renderHeadline = () => {
        const { PASTCONTRIBUTORSHEADLINE } = this.props.content
        return PASTCONTRIBUTORSHEADLINE.map(t => {
            return (
                <Col md={12} key={t.key}>
                    <Headline
                        headline={t.headline}
                        fontSize={theme.sizes.subtitle}
                        color={theme.colors.black}
                        weight='bold'
                        alignment='left'
                    />
                </Col>
            )
        })
    }

    renderTestimonials = () => {
        const { PASTCONTRIBUTORSTESTIMONIALS } = this.props.content
        return PASTCONTRIBUTORSTESTIMONIALS.map(t => {
            return (

                <PastContributorTile
                    date={t.date}
                    headline={t.name}
                    description={t.quote}
                    portrait={t.portrait}

                />

            )
        })
    }


    render() {
        return (
            <Section>
                <Row>

                    <Col xs={10} className='mx-auto'>
                        <Row>
                            {this.renderHeadline()}
                            {this.renderTestimonials()}
                            {/* {this.renderButton()} */}
                        </Row>
                    </Col>

                </Row>
            </Section>
        )
    }
}

export default PastContributors
