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
                <PullOuts />
                <Quote
                    headline='Setlife helps you discover computer programming, learn about jobs available to programmers and get started building programming skills.'
                    author='Marin Basic'
                    company='CEO at branding.studio'
                />
                <Newsletter />
                <Footer />

            </div>


        );
    }
}

export default HomePage;
