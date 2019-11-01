import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../sections/Footer'

import { API_ROOT } from '../constants'


const ReactMarkdown = require('react-markdown')
const fs = require('fs')

const Section = styled(Row)`
    margin:50px;
`


class NewslettersPage extends Component {

    state = {
        markdownContent: null,
    }


    componentDidMount() {

        fetch(`${API_ROOT}/fetchAllNewsletters`)
        .then(response => {
            if (response.ok) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        })
        .then(response => response.json())
        .catch(error => {
            console.log('Looks like there was a problem!', error)
            this.props.history.push('/')
        })
        .then(response => {
            const markdownContent = response
            this.setState({ markdownContent: markdownContent })
        })

    }

    renderNewsletters = () => {
        return this.state.markdownContent.map(t => {
            var url = `/newsletters/${t}`
            url = url.slice(0, -3)
            return (
                <li>
                    <a href={url}>
                        {t}
                    </a>
                </li>
            )
        });
    }

    render() {

        const {
            content,
            changeLanguage,
        } = this.props

        return (
            <div>
                <Header content={content} />

                <Section>
                    {this.state.markdownContent
                        ? (
                            <Row>
                                <Col />
                                <Col xs={10}>
                                    <p>

                                        {this.renderNewsletters()}

                                    </p>
                                </Col>
                                <Col />
                            </Row>
                        ) : (
                            <p>url no valid</p>
                        )
                    }
                </Section>

                <Footer content={content} />
            </div>


        );
    }
}

export default NewslettersPage;
