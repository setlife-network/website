import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Image, Row, Col, Form
} from 'react-bootstrap';

import NewsletterPhoto from '../assets/images/newsletterPhoto.png'

import BlankButton from '../components/BlankButton'
import theme from '../styles/theme';
import Title from '../components/Title';
import Text from '../components/Text';
import DividerLine from '../components/DividerLine';

const Section = styled(Row)`
    padding-top: 80px;
`

const Wrapper = styled(Col)`
    padding-bottom:30px
`

const ImageContainer = styled(Image)`
    width:50%;
    height: 450px;
    z-index:1;
    position: absolute;
    right:10px

`
const Division = styled(Row)`
    background:${theme.colors.primary};
    padding-top:30px;
    padding-bottom:30px
`

class Newsletter extends Component {

    render() {
        return (

            <Section className='Newsletter'>

                <Col md={12} className='d-none d-md-flex'>
                    <ImageContainer src={NewsletterPhoto} />
                </Col>

                <Col xs={11} className='mx-auto '>

                    <Title
                        weight='bold'
                        size={theme.sizes.large}
                    >
                        Interested in SetLife?
                    </Title>

                    <Wrapper md={2} xs={6}>
                        <DividerLine />
                    </Wrapper>

                    <Wrapper md={6}>
                        <Text
                            weight='bold'
                            size={theme.sizes.regular}

                        >
                            Sign up for our mailing list to receive monthly updates about our programs
                        </Text>
                    </Wrapper>

                </Col>
                <Col xl={12}>
                    <Division>
                        <Col xs={11} className='mx-auto'>

                            <Text
                                weight='bold'
                                color={theme.colors.white}
                                size={theme.sizes.regular}
                            >
                                We'll never share your email or bother you with spam
                            </Text>
                            <Wrapper md={4}>
                                <Form.Control size='sm' type='text' placeholder='Enter your email' />
                            </Wrapper>
                            <Wrapper md={2}>
                                <BlankButton
                                    description='Sign up'
                                    url='url'
                                />
                            </Wrapper>


                        </Col>
                    </Division>
                </Col>


            </Section>

        )
    }
}

export default Newsletter
