import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'
import { forEach } from 'lodash'

import Header from '../components/Header'
import Footer from '../sections/Footer'

import { API_ROOT } from '../constants'

const Section = styled(Row)`
    margin:50px;
`

const monthCompare = (a, b) => {
    if (moment(a).isAfter(moment(b))) {
        return 1
    }else{
        return -1
    }
}

class NewslettersPage extends Component {

    state = {
        newsletters: [],
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
        .then(response => {
            const newsletters = response
            this.setState({ newsletters: newsletters })
        })
        .catch(error => {
            console.log('Looks like there was a problem!', error)
            this.props.history.push('/')
        })

    }

    renderNewsletters = () => {

        this.state.newsletters.sort(monthCompare)

        return this.state.newsletters.map(t => {

            var url = `/newsletters/${t}`
            url = url.slice(0, -3)

            return (
                <li>
                    <a href={url}>
                        {moment(t.slice(0,-3)).format('MMMM YYYY')}
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
                <Header
                    content={content}
                    changeLanguage={changeLanguage}
                    language={this.props.language}
                />
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
