import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'

import Header from '../components/Header'
import Footer from '../sections/Footer'

import { API_ROOT } from '../constants'

const Section = styled(Row)`
    margin:50px;
`

const monthCompare = (a, b) => {
    const months = {
        'January-2019.md': 11,
        'February-2019.md': 10,
        'March-2019.md': 9,
        'April-2019.md': 8,
        'May-2019.md': 7,
        'June-2019.md': 6,
        'July-2019.md': 5,
        'August-2019.md': 4,
        'September-2019.md': 3,
        'October-2019.md': 2,
        'November-2019.md': 1,
        'December-2019.md': 0
    }

    return months[a] - months[b]
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
            url = moment(url).format('MMMM YYYY');

            return (
                <li>
                    <a href={url}>
                        {url}
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
