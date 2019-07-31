import React, { Component } from 'react';
import {
    Row, Col, Typography, Layout, AutoComplete, Button, Radio, Icon
} from 'antd';




import ValueTile from '../components/ValueTile'
import TestimonyTile from '../components/TestimonyTile'
import RoundButton from '../components/RoundButton'
import Header from '../components/Header'

import Hero from '../sections/Hero'
import Programs from '../sections/Programs'

const {
    Footer, Sider, Content
} = Layout;
const { Title } = Typography;
const { Text } = Typography;





class CoreValues extends Component {
    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <Row>
                    <Col span={1} md={3}>
                    </Col>
                    <Col span={22} md={18}>
                        <Row type='flex' justify='space-around'>
                            <Col span={24} md={10}>
                                <ValueTile
                                    headline='Intellectual Freedom'
                                    description='It is the right of every individual to both seek and receive information from all points of view without restriction'
                                />
                                <Row style={{ height: 40 }}>
                                </Row>
                                <ValueTile
                                    headline='Learn by Teaching'
                                    description='The deepest understanding of a topic comes when you can teach anyone willing to learn by adapting ideas to their specific educational context'
                                />
                                <Row style={{ height: 40 }}>
                                </Row>
                            </Col>

                            <Col span={24} md={10}>
                                <ValueTile
                                    headline='Open-source software "libre"'
                                    description='To promote true "freedom", users must be able to run software such that it can be studied, changed, adapted, and distributed in any variation'
                                />
                                <Row style={{ height: 40 }}>
                                </Row>
                                <ValueTile
                                    headline='Open-source software "libre"'
                                    description='To promote true "freedom", users must be able to run software such that it can be studied, changed, adapted, and distributed in any variation'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1} md={3}>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Blog extends Component {
    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <Row>
                    <Col span={1} md={3}>
                    </Col>
                    <Col span={22} md={18}>
                        <Row type='flex' justify='space-around'>
                            <Col span={22} md={6} style={{ marginTop: 15 }}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </Col>
                            <Col span={22} md={6} style={{ marginTop: 15 }}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </Col>
                            <Col span={22} md={6} style={{ marginTop: 15 }}>
                                <TestimonyTile
                                    date='20 april 2022'
                                    headline='Some blog headline lorem ipsum'
                                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText='Link'
                                    link='url'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1} md={3}>
                    </Col>
                </Row>
            </div>
        )
    }
}


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
