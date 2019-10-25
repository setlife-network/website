import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../sections/Footer'

const ReactMarkdown = require('react-markdown')
const fs = require('fs')


class NewslettersPage extends Component {

    state = {
        markdownContent: null,
    }


    componentDidMount() {
        console.log('properties');
        console.log(this.props.content.COOKIESCONSENT[0].description);
        console.log(this.props.match.params.month);
        if (this.props.match.params.month != null) { this.setState({ markdownContent: this.props.match.params.month }) }
        console.log('this.state');
        console.log(this.state);


    }

    render() {


        const {
            content,
            changeLanguage
        } = this.props

        const markdown = `
This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
`


        return (
            <div>
                <Header content={content} changeLanguage={changeLanguage} language={this.props.language} />


                <ReactMarkdown escapeHtml={false} source={markdown} />


                <Footer content={content} />
            </div>


        );
    }
}

export default NewslettersPage;
