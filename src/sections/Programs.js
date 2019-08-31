import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import { PROGRAMSHEADLINE, PROGRAMSLEFT, PROGRAMSRIGHT } from '../constants'

import ProgramCard from '../components/ProgramCard'
import Headline from '../components/Headline'
import theme from '../styles/theme';

const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.back}
`
const CardDiv = styled(Col)`
    margin-top: ${props => props.top};
    margin-bottom: ${props => props.bottom};

`

class Programs extends Component {

    renderHeadline = () => {
        return PROGRAMSHEADLINE.map(t => {
            return (
                <Col md={12} key={t.key}>
                    <Headline
                        headline={t.headline}
                        color={theme.colors.black}
                        description={t.description}
                        alignment='center'
                    />
                </Col>
            )
        })
    }

    renderProgramsLeft = () => {
        return PROGRAMSLEFT.map(t => {
            return (
                <CardDiv
                    top='60px'
                    key={t.key}
                >
                    <ProgramCard
                        headline={t.headline}
                        description={t.description}
                        buttonText={t.buttonText}
                        link={t.url}
                        image={t.image}
                    />
                </CardDiv>
            )
        })
    }

    renderProgramsRight = () => {
        return PROGRAMSRIGHT.map(t => {
            return (
                <CardDiv
                    bottom='60px'
                    key={t.key}
                >
                    <ProgramCard
                        headline={t.headline}
                        description={t.description}
                        buttonText={t.buttonText}
                        link={t.url}
                        image={t.image}
                    />
                </CardDiv>
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
                        <Col md={6}>

                            {this.renderProgramsLeft()}

                        </Col>
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
