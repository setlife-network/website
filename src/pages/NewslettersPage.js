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
        newsletters: null,
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
            const newsletters = response
            this.setState({ newsletters: newsletters })
        })

    }

    renderNewsletters = () => {
        return this.state.newsletters.map(t => {
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


                {this.state.newsletters
                        && (
                            <Section>
                                <Row>
                                    <Col />
                                    <Col xs={10}>
                                        <p>

                                            {this.renderNewsletters()}

                                        </p>
                                    </Col>
                                    <Col />
                                </Row>
                            </Section>
                        )
                }


                <Footer content={content} />
            </div>


        );
    }
}

export default NewslettersPage;
