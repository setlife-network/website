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

import { SITE_ROOT } from '../constants'

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

    checkStatus = (response) => {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    postData = (e) => {

        const email = document.getElementById('emailHolder').value;


        const config = {
            url: SITE_ROOT,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }

        fetch(config)
        .then(this.checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        const NEWSLETTER = this.props.content.NEWSLETTER[0]
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
                        {NEWSLETTER.title}
                    </Title>

                    <Wrapper md={2} xs={6}>
                        <DividerLine />
                    </Wrapper>

                    <Wrapper md={6}>
                        <Text
                            weight='bold'
                            size={theme.sizes.regular}

                        >
                            {NEWSLETTER.headline}
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
                                {NEWSLETTER.description}
                            </Text>
                            <Wrapper md={4}>
                                <Form.Control id='emailHolder' size='sm' type='text' placeholder={NEWSLETTER.placeholder} />
                            </Wrapper>
                            <Wrapper md={2}>
                                <Button variant='info' onClick={() => this.postData()}>
                                    {NEWSLETTER.buttonText}
                                </Button>
                            </Wrapper>


                        </Col>
                    </Division>
                </Col>


            </Section>

        )
    }
}


export default Newsletter
