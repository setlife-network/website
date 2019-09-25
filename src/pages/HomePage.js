import React, { Component } from 'react';


import Header from '../components/Header'
import Hero from '../sections/Hero'
import Programs from '../sections/Programs'
import CoreValues from '../sections/CoreValues'
import Consultation from '../sections/Consultation'
import Blog from '../sections/Blog'
import Quote from '../sections/Quote'
import Newsletter from '../sections/Newsletter'
import Footer from '../sections/Footer'


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


        return (
            <div>
                <Header content={content} changeLanguage={changeLanguage} language={this.props.language} />
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
