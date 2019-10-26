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
        if (this.props.match.params.month != null) {
            const markdownContent = fs.readFileSync(`../content/newletter/${this.props.match.params.month}`)
            this.setState({ markdownContent: markdownContent })
        }


    }


    render() {


        const {
            content,
            changeLanguage
        } = this.props


        const markdown = this.props.content.COOKIESCONSENT[0].description


        return (
            <div>
                <Header content={content} />

                {console.log('this.state')}
                {console.log(this.state)}

                {this.state.markdownContent
                    ? (
                        <ReactMarkdown escapeHtml={false} source={markdown} />


                    ) : (
                        console.log('url no valid')
                    )
                }


                <Footer content={content} />
            </div>


        );
    }
}

export default NewslettersPage;
