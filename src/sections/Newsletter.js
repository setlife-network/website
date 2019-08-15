import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col, Form
} from 'react-bootstrap';

import RoundButton from '../components/RoundButton'
import theme from '../styles/theme';
import Title3 from '../components/Title3';
import Text from '../components/Text';


const FormSection = styled.div`
    padding-top: 80px;
    padding-bottom:80px;
    background: linear-gradient(to bottom, ${theme.colors.white} 50%,${theme.colors.primary} 50%);
`

const ContentDiv = styled.div`
    padding-bottom:50px;
`

class Newsletter extends Component {

    render() {
        return (

            <FormSection>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={10}>
                        <Col md={6}>
                            <Row>

                                <Col md={12}>
                                    <ContentDiv>
                                        <Title3 bold>
                                            Not a Setlife member?
                                        </Title3>
                                        <Text bold>
                                            Join our newsletter packed with free resources on how to learn to code with ease.
                                        </Text>
                                    </ContentDiv>
                                </Col>

                            </Row>
                            <Row>
                                <Col md={12}>

                                    <Text bold white>
                                        Newsletter signup
                                    </Text>
                                    <Col md={6}>
                                        <Form.Control size='sm' type='text' placeholder='Enter email' />
                                        <RoundButton
                                            buttonText='Signup'
                                            onClick='url'
                                        />
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} style={{ background: 'yellow' }}>
                        </Col>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
            </FormSection>

        )
    }
}

export default Newsletter
