import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../sections/Footer'

import { API_ROOT } from '../constants'


const ReactMarkdown = require('react-markdown')
const fs = require('fs')


class NewslettersPage extends Component {

    state = {
        markdownContent: null,
    }


    componentDidMount() {

        if (this.props.match.params.month != null) {

            fetch(`${API_ROOT}/fetchNewsletter/${this.props.match.params.month}`)
            .then(response => {
                if (response.ok) {
                    return Promise.resolve(response);
                } else {
                    return Promise.reject(new Error(response.statusText));
                }
            })
            .then(response => response.text())
            .catch(error => {
                console.log('Looks like there was a problem!', error)
                this.props.history.push('/')
            })
            .then(response => {
                const markdownContent = response
                this.setState({ markdownContent: markdownContent })
            })
        }
    }

    render() {


        const {
            content,
            changeLanguage
        } = this.props


        return (
            <div>
                <Header content={content} />

                {this.state.markdownContent
                    && (
                        <Row>
                            <Col />
                            <Col xs={10}>
                                <ReactMarkdown escapeHtml={false} source={this.state.markdownContent} />
                            </Col>
                            <Col />
                        </Row>
                    )
                }

                <Footer content={content} />
            </div>


        );
    }
}

export default NewslettersPage;
