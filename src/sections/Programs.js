import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import ProgramCard from '../components/ProgramCard'
import Headline from '../components/Headline'

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
                                description='SetLife is continuously developing a variety of programs to help promote the advancement of collaborative learning and the engineering of solutions for social prosperity'
                            />
                        </Col>


                        <Col md={6}>
                            <CardDiv left>
                                <ProgramCard
                                    headline='International Learning & Development'
                                    description='Train & refine your technical skills and experience modern international work culture in Barcelona, Spain'
                                    buttonText='Trial 1 Overview'
                                    link='url'
                                />
                            </CardDiv>
                            <CardDiv left>
                                <ProgramCard
                                    headline='Online Education Courses'
                                    description='Check out the materials in our core curriculum to learn what technologies are out there for you to explore'
                                    buttonText='Core Curriculum'
                                    link='url'
                                />
                            </CardDiv>
                        </Col>
                        <Col md={6}>
                            <CardDiv right>
                                <ProgramCard
                                    headline='International Learning & Development'
                                    description='Train & refine your technical skills and experience modern international work culture in Barcelona, Spain'
                                    buttonText='Trial 1 Overview'
                                    link='url'
                                />
                            </CardDiv>
                            <CardDiv right>
                                <ProgramCard
                                    headline='Online Education Courses'
                                    description='Check out the materials in our core curriculum to learn what technologies are out there for you to explore'
                                    buttonText='Core Curriculum'
                                    link='url'
                                />
                            </CardDiv>
                        </Col>
                    </Row>
                </Col>
                <Col md={2}>
                </Col>
            </Section>

            /*
            <Section grey>
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <RowDiv>
                                        <ProgramCard
                                            headline='International Learning & Development'
                                            description='Train & refine your technical skills and experience modern international work culture in Barcelona, Spain'
                                            buttonText='Trial 1 Overview'
                                            link='url'
                                        />
                                    </RowDiv>
                                </Row>
                                <Row>
                                    <RowDiv>
                                        <ProgramCard
                                            headline='Online Education Courses'
                                            description='Check out the materials in our core curriculum to learn what technologies are out there for you to explore'
                                            buttonText='Core Curriculum'
                                            link='url'
                                        />
                                    </RowDiv>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <ProgramCard
                                        headline='Employee Technical Training'
                                        description='Invest in your own employees and provide them with the latest tools to contribute to company growth'
                                        buttonText='Free Consultation'
                                        link='url'
                                    />
                                </Row>
                                <Row>
                                    <RowDiv>
                                        <ProgramCard
                                            headline='Mentorship'
                                            description='Join our mission and help us teach how to teach and learn how to learn'
                                            buttonText='Join Slack Channel'
                                            link='url'
                                        />
                                    </RowDiv>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Section>
            */

        )
    }
}

export default Programs
