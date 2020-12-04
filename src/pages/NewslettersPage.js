import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'
import { forEach } from 'lodash'

import Header from '../components/Header'
import Footer from '../sections/Footer'
import Text from '../components/Text'
import NewsletterTile from '../components/NewsletterTile'

import theme from '../styles/theme';

import { API_ROOT } from '../constants'

const Section = styled(Row)`

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

        const { history } = this.props

        this.state.newsletters.sort(monthCompare)

        return this.state.newsletters.map(t => {
            return (
                <Col xs={12} lg={4} className='px-4 py-2'>
                    <NewsletterTile date={t.slice(0,-3)} history={history}/>
                </Col>
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
                <Row className='px-5 my-5'>
                    <Col />
                    <Col xs={10}>
                    <Text weight='bold' fontSize={theme.sizes.subtitle} color={theme.colors.primary}>
                        Monthly Newsletters
                    </Text>

                        {this.state.newsletters
                            && (
                                <Row>
                                    {this.renderNewsletters()}
                                </Row>
                            )
                        }
                    </Col>
                    <Col />
                </Row>
                <Footer content={content} />
            </div>
        );
    }
}

export default NewslettersPage;
