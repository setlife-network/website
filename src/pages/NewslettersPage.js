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
            .then(response => response.text())
            .then(response => {
                console.log(response);
                const markdownContent = response
                this.setState({ markdownContent: markdownContent })

                console.log('this.state');
                console.log(this.state);


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

                {console.log('this.state')}
                {console.log(this.state)}

                {this.state.markdownContent
                    ? (
                        <Row>
                            <Col />
                            <Col xs={10}>
                                <ReactMarkdown escapeHtml={false} source={this.state.markdownContent} />
                            </Col>
                            <Col />
                        </Row>


                    ) : (
                        <p>urlnovalid</p>
                    )
                }


                <Footer content={content} />
            </div>


        );
    }
}

export default NewslettersPage;
