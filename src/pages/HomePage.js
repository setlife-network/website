import React, { Component } from 'react';
import CookieConsent from '../../node_modules/react-cookie-consent';

import Header from '../components/Header'
import Hero from '../sections/Hero'
import Programs from '../sections/Programs'
import CoreValues from '../sections/CoreValues'
import Consultation from '../sections/Consultation'
import Blog from '../sections/Blog'
import Quote from '../sections/Quote'
import Newsletter from '../sections/Newsletter'
import Footer from '../sections/Footer'
import theme from '../styles/theme';


class HomePage extends Component {

    renderQuote = () => {
        const { QUOTE } = this.props.content
        return QUOTE.map(t => {
            return (
                <Quote
                    headline={t.headline}
                    author={t.author}
                    company={t.company}
                    key={t.key}
                />
            )
        })
    }

    render() {

        const {
            content, changeLanguage, changeEnglish, changeSpanish
        } = this.props
        const { COOKIESCONSENT } = this.props.content

        return (
            <div>
                <CookieConsent
                    location='bottom'
                    buttonText={COOKIESCONSENT[0].agreement}
                    style={{ background: theme.colors.grey, color: 'black' }}
                    buttonStyle={{
                        background: theme.colors.primary,
                        color: theme.colors.white,
                        fontSize: '13px'
                    }}
                >
                    {COOKIESCONSENT[0].description}
                    <a href='https://docs.google.com/document/d/1eJWm3ThBoMgt2KKd7p0pYokDLwFwGYegk-S1fbLRH-A/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>{COOKIESCONSENT[0].link}</a>
                </CookieConsent>
                <Header
                    content={content}
                    changeLanguage={changeLanguage}
                    language={this.props.language}
                />
                <Hero content={content} />
                <Programs content={content} />
                <CoreValues content={content} />
                <Consultation content={content} />
                <Blog content={content} />
                {this.renderQuote()}
                <Newsletter content={content} />
                <Footer content={content} />

            </div>


        );
    }
}

export default HomePage;
