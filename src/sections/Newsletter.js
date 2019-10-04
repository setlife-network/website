import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Image, Row, Col, Form, Button
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

const Submit = styled(Button)`
    background:${theme.colors.primary};
    color: ${theme.colors.primary}

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
                                Well never share your email or bother you with spam
                            </Text>
                            <Wrapper md={4}>
                                <Form.Control id='emailHolder' size='sm' type='text' placeholder='Enter your email' />
                            </Wrapper>
                            <Wrapper md={2}>
                                <Submit variant='primary' onClick={() => postData()} />
                            </Wrapper>


                        </Col>
                    </Division>
                </Col>


            </Section>

        )
    }
}

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function postData(e) {

    const email = document.getElementById('emailHolder').value;


    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    }

    fetch('https://jsonplaceholder.typicode.com/comments', config)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => console.log(data))
}

export default Newsletter
