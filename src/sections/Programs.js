import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import constants, { PROGRAMSLEFT, PROGRAMSRIGHT } from '../constants'

import ProgramCard from '../components/ProgramCard'
import Headline from '../components/Headline'
import theme from '../styles/theme';

const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`
const CardDiv = styled(Col)`
    margin-top: ${props => props.left ? '30px' : '0px'}
    margin-bottom: ${props => props.right ? '30px' : '0px'}
`

class Programs extends Component {

    renderProgramsLeft = () => {
        return PROGRAMSLEFT.map(t => {
            return (
                <CardDiv left>
                    <ProgramCard
                        headline={t.headline}
                        description={t.description}
                        buttonText={t.LinkButton}
                        link={t.url}
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
                        buttonText={t.LinkButton}
                        link={t.url}
                    />
                </CardDiv>
            )
        })
    }


    render() {
        return (

            <Section grey>
                <Col md={2}>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={12}>
                            <Headline
                                headline='Set Life Programs'
                                color={theme.colors.black}
                                description='SetLife is continuously developing a variety of programs to help promote the advancement of collaborative learning and the engineering of solutions for social prosperity'
                                alignment='center'
                            />
                        </Col>
                        <Col md={6}>

                            {this.renderProgramsLeft()}

                        </Col>
                        <Col md={6}>

                            {this.renderProgramsRight()}

                        </Col>
                    </Row>
                </Col>
                <Col md={2}>
                </Col>
            </Section>


        )
    }
}

export default Programs
