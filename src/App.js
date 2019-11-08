import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NewsletterDetailPage from './pages/NewsletterDetailPage';
import NewslettersPage from './pages/NewslettersPage';

import english from './content/english'
import spanish from './content/spanish'

let locale = navigator.language

class App extends React.Component {

    state = {
        language: locale === 'en-US' ? 'english' : 'spanish'
    }


    changeLanguage = (newLanguage) => {
        this.setState({ language: newLanguage })
    }

    render() {

        const content = this.state.language == 'english' ? english : spanish

        return (
            <div className='App'>
                <Route
                    exact
                    path='/'
                    render={(props) => (
                        <HomePage
                            {...props}
                            content={content}
                            changeLanguage={this.changeLanguage}
                            language={this.state.language}
                        />
                    )}
                />
                <Route
                    exact
                    path='/newsletters/:month'
                    render={(props) => (
                        <NewsletterDetailPage
                            {...props}
                            content={content}
                            changeLanguage={this.changeLanguage}
                            language={this.state.language}
                        />
                    )}
                />
                <Route
                    exact
                    path='/newsletters'
                    render={(props) => (
                        <NewslettersPage
                            {...props}
                            content={content}
                            changeLanguage={this.changeLanguage}
                            language={this.state.language}
                        />
                    )}
                />
                <Route
                    path='/Curriculum-Outline'
                    render={() => (
                        window.location.replace('https://tech-education.teachable.com/')
                    )}
                />
                <Route
                    path='/Fundamentals-of-Software'
                    render={() => (
                        window.location.replace('https://tech-education.teachable.com/')
                    )}
                />
                {/*
                <Route
                    path='/Project-Based-Learning-1-Barcelona'
                    render={() => (
                        window.location.replace('https://info.setlife.network/Project-Based-Learning-1-Barcelona`')
                    )}
                />
                <Route
                    path='/SetBounty-v1-Spec'
                    render={() => (
                        window.location.replace('https://info.setlife.network/SetBounty-v1-Spec`')
                    )}
                />
                */}
            </div>
        )
    }
}

export default withRouter(App)
