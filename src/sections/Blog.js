import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import TestimonyTile from '../components/TestimonyTile'
import FilledButton from '../components/FilledButton'
import Headline from '../components/Headline'
import theme from '../styles/theme';


const Section = styled.div`
    padding-top: 80px;
    padding-bottom:30px;
    background: ${props => props.grey ? theme.colors.grey : theme.colors.white}
`

const TestimonyDiv = styled(Col)`
    margin-bottom:50px
`
const ButtonDiv = styled(Col)`
    margin: auto;
    margin-bottom:50px


`

class Blog extends Component {

    renderHeadline = () => {
        const { BLOGHEADLINE } = this.props.content
        return BLOGHEADLINE.map(t => {
            return (
                <Col md={12} key={t.key}>
                    <Headline
                        headline={t.headline}
                        color={theme.colors.black}
                        weight='bold'
                        alignment='left'
                    />
                </Col>
            )
        })
    }

    renderTestimonials = () => {
        const { TESTIMONIALS } = this.props.content
        return TESTIMONIALS.map(t => {
            return (
                <TestimonyDiv md={4} key={t.key}>
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

    renderButton = () => {
        const { BLOGBUTTON } = this.props.content
        return BLOGBUTTON.map(t => {
            return (
                <ButtonDiv xs={6} md={2} key={t.key}>
                    <FilledButton
                        url={t.url}
                        description={t.description}

                    />
                </ButtonDiv>
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

export default Blog
