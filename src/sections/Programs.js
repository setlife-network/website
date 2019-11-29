import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import ProgramCard from '../components/ProgramCard'
import Headline from '../components/Headline'
import theme from '../styles/theme';

const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.back}
`

const TileCol = styled(Col)`
    margin-top: 50px;

`

class Programs extends Component {

    renderHeadline = () => {
        const { PROGRAMSHEADLINE } = this.props.content
        return PROGRAMSHEADLINE.map(t => {
            return (
                <Col xs={12} key={t.key}>
                    <Headline
                        headline={t.headline}
                        color={theme.colors.black}
                        description={t.description}
                        alignment='center'
                        weight='bold'
                    />
                </Col>
            )
        })
    }

    renderProgramsLeft = () => {
        const { PROGRAMSLEFT } = this.props.content
        return PROGRAMSLEFT.map(t => {
            return (
                <Col>
                    <ProgramCard
                        headline={t.headline}
                        description={t.description}
                        buttonText={t.buttonText}
                        link={t.link}
                        color={theme.colors.primary}
                        image={t.image}
                    />
                </Col>
            )
        })
    }

    renderProgramsRight = () => {
        const { PROGRAMSRIGHT } = this.props.content
        return PROGRAMSRIGHT.map(t => {
            return (
                <Col>
                    <ProgramCard
                        headline={t.headline}
                        description={t.description}
                        buttonText={t.buttonText}
                        link={t.link}
                        color={theme.colors.primary}
                        image={t.image}
                    />
                </Col>
            )
        })
    }


    render() {
        return (

            <Section
                back={theme.colors.grey}

            >
                <Col xs={10} md={8} className='mx-auto'>
                    <Row>
                        {this.renderHeadline()}
                        <TileCol md={6}>

                            {this.renderProgramsLeft()}

                        </TileCol>
                        <Col md={6}>

                            {this.renderProgramsRight()}

                        </Col>
                    </Row>
                </Col>
            </Section>


        )
    }
}

export default Programs
