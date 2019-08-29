import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import RoundButton from '../components/RoundButton'
import Header from '../components/Header'


import Hero from '../sections/Hero'
import Programs from '../sections/Programs'
import CoreValues from '../sections/CoreValues'
import Consultation from '../sections/Consultation'
import Blog from '../sections/Blog'
import PullOuts from '../sections/PullOuts'
import Quote from '../sections/Quote'
import Newsletter from '../sections/Newsletter'
import Footer from '../sections/Footer'


class HomePage extends Component {
    render() {
        return (

            <div>

                <Header />
                <Hero />
                <Programs />
                <CoreValues />
                <Consultation />
                <Blog />
                <Newsletter />
                <Quote
                    headline='If you can’t explain something in simple terms, you don’t understand it'
                    author='Richard Feynman'
                    company='Theoretical Physicist'
                />
                <Footer />

            </div>


        );
    }
}

export default HomePage;
