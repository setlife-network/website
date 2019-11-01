import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NewslettersPage from './pages/NewslettersPage';
import AllNewslettersPage from './pages/AllNewslettersPage';

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
                        <NewslettersPage
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
                        <AllNewslettersPage
                            {...props}
                            content={content}
                            changeLanguage={this.changeLanguage}
                            language={this.state.language}
                        />
                    )}
                />


            </div>
        )
    }
}

export default withRouter(App)
