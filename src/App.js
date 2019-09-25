import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import english from './content/english'
import spanish from './content/spanish'

let locale = navigator.language

class App extends React.Component {

    state = {
        language: locale === 'en-US' ? 'english' : 'spanish'
    }

    changeLanguage = () => {
        const newLanguage = this.state.language == 'english' ? 'spanish' : 'english'
        this.setState({ language: newLanguage })
    }

    render() {

        const content = this.state.language == 'english' ? english : spanish

        return (
            <div className='App'>
                {console.log(content)}
                <Route
                    exact
                    path='/'
                    render={(props) => (
                        <HomePage
                            {...props}
                            content={content}
                            changeLanguage={this.changeLanguage}
                        />
                    )}

                />


            </div>
        )
    }
}

export default withRouter(App)
