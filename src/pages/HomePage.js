import React, { Component } from 'react';
import {
    Row, Col, Typography, Layout, AutoComplete, Button, Radio, Icon
} from 'antd';


import RoundButton from '../components/RoundButton'
import Header from '../components/Header'

import Hero from '../sections/Hero'
import Programs from '../sections/Programs'
import CoreValues from '../sections/CoreValues'
import Blog from '../sections/Blog'
import Newsletter from '../sections/Newsletter'

const {
    Footer, Sider, Content
} = Layout;

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <Row>

                        <Hero />
                        <Programs />
                        <CoreValues />
                        <Blog />
                        <Newsletter />

                    </Row>
                </Content>
                <Footer>Footer</Footer>
            </Layout>

        );
    }
}

export default HomePage;
