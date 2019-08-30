import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import constants, { PROGRAMSHEADLINE, PROGRAMSLEFT, PROGRAMSRIGHT } from '../constants'

import ProgramCard from '../components/ProgramCard'
import Headline from '../components/Headline'
import theme from '../styles/theme';

const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`
const CardDiv = styled(Col)`
    margin-top: ${props => props.left ? '60px' : '0px'};
    margin-bottom: ${props => props.right ? '60px' : '0px'};

`

class Programs extends Component {

    renderHeadline = () => {
        return PROGRAMSHEADLINE.map(t => {
            return (
                <Col md={12}>
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
                <CardDiv left>
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
                <CardDiv right>
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

            <Section grey>
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
