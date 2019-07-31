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

const {
    Footer, Sider, Content
} = Layout;
const { Title } = Typography;
const { Text } = Typography;






class SubscribeForUpdates extends Component {

    render() {
        return (
            <div style={{ margin: 50 }}>
                <Row>
                    <Col span={0} md={3}>
                    </Col>
                    <Col span={24} md={18}>
                        <Row>
                            <Col span={24} md={9}>
                                <Title level={2}>Stay tuned!</Title>
                            </Col>

                        </Row>
                        <Row>
                            <Col span={24} md={12}>
                                <Text>Suscribe to be up to date of our new courses</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} md={8} style={{ marginBottom: 20, marginTop: 20 }}>
                                <RoundButton
                                    buttonText='Submit'
                                    onClick={() => console.log('Submit button clicked')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} md={10}>
                                <AutoComplete
                                    style={{ width: 200 }}
                                    placeholder='Email'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={0} md={3}>
                    </Col>
                </Row>
            </div>
        )
    }
}

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <Row type='flex'>

                        <Hero />
                        <Programs />
                        <CoreValues />
                        <Blog />

                    </Row>
                    <SubscribeForUpdates />
                </Content>
                <Footer>Footer</Footer>
            </Layout>

        );
    }
}

export default HomePage;
