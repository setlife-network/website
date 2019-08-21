import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col, Form
} from 'react-bootstrap';

import NewsletterPhoto from '../assets/images/newsletterPhoto.png'

import BlankButton from '../components/BlankButton'
import theme from '../styles/theme';
import Title from '../components/Title';
import Text from '../components/Text';
import DividerLine from '../components/DividerLine';


const Section = styled(Row)`
    padding-top: 80px;
    padding-bottom:80px;
    background: linear-gradient(to bottom, ${theme.colors.white} 50%,${theme.colors.primary} 50%);
`

const ContentDiv = styled(Row)`

    padding-bottom:50px;

`

const Wrapper = styled(Col)`

    padding-bottom:30px

`

const ImageContainer = styled(Image)`

width:700px

`

const OutContainer = styled(Col)`

position: absolute;
top: 50%;
left: 50%;
transform: translateY(-50%) translateX(-50%);
`

class Newsletter extends Component {

    render() {
        return (

            <Section>
                <Col md={1}>
                </Col>
                <Col md={10}>
                    <Row>
                        <Col md={6}>
                            <ContentDiv>
                                <Wrapper md={12}>
                                    <Title
                                        bold
                                        size={theme.sizes.large}
                                    >
                                        Not a Setlife member?
                                    </Title>
                                </Wrapper>
                                <Wrapper md={2}>
                                    <DividerLine />
                                </Wrapper>
                                <Wrapper md={12}>
                                    <Text
                                        weight='bold'
                                        size={theme.sizes.regular}
                                    >
                                            Join our newsletter packed with free resources on how to learn to code with ease.
                                    </Text>
                                </Wrapper>
                            </ContentDiv>

                            <Row>
                                <Wrapper md={12}>
                                    <Text
                                        weight='bold'
                                        color={theme.colors.white}
                                        size={theme.sizes.regular}
                                    >
                                        Newsletter signup
                                    </Text>
                                </Wrapper>
                                <Wrapper md={7}>
                                    <Form.Control size='sm' type='text' placeholder='Enter email' />
                                </Wrapper>
                                <Wrapper md={6}>
                                    <BlankButton
                                        description='Signup'
                                        onClick='url'
                                    />
                                </Wrapper>

                            </Row>
                        </Col>
                        <Col md={6}>

                                <ImageContainer src={NewsletterPhoto} />

                        </Col>
                    </Row>
                </Col>
                <Col md={1}>
                </Col>

            </Section>

        )
    }
}

export default Newsletter
