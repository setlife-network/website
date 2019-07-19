
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { AutoComplete } from 'antd';
import { Button, Radio, Icon } from 'antd';
import TeaserTile from '../components/TeaserTile.js';
import LinkButton from '../components/LinkButton.js'
import ProgramCard from '../components/ProgramCard.js'
import ValueTile from '../components/ValueTile.js'
import TestimonyTile from '../components/TestimonyTile.js'


const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const { Text } = Typography;

class RoundButton extends Component {
    state = {
        size: 'large',
    };


    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    render(){
        const { buttonText, onClick } = this.props;
        const { size } = this.state;
        return(
            <Button
	                className='RoundButton'
	                type='primary'
	                shape='round'
	                onClick={onClick}
	            >
	                {buttonText}
	        </Button>
        )
    }
}

class Hero extends Component{
    render(){
        return(
            <div >
                <Col span = {1} md = {3}>
                </Col>
                <Col span = {22} md = {18} style={{marginTop: 50, marginBottom:50}}>
                    <Row type="flex" justify="space-around">
                        <TeaserTile
                            headline = 'Tech Education'
                            intro = 'We’ll teach you the core concepts you need to understand technology and anticipate the impact of its exponential growth on your daily life'
                            buttonText = 'Core curriculum'
                            link = 'url'

                        />
                        <TeaserTile
                            headline = 'Project-based Learning'
                            intro = 'We’ll help you apply new knowledge directly to existing community projects (or help you start your own!) so that you can train your skills and gain valuable work experience'
                            buttonText = 'Explore projects'
                            link = 'url'
                        />
                        <TeaserTile
                            headline = 'Open-source development tools'
                            intro = 'We are committed to leveraging cutting-edge technology to promoting open-source tools that make development as simple as possible'
                            buttonText = 'Documentation'
                            link = 'url'
                        />


                    </Row>
                </Col>
                <Col span = {1} md= {3}>
                </Col>

            </div>
        )
    }
}

class Programs extends Component{
    render(){
        return(
            <div style = {{background: '#EEEEEE'}}>
                <Row>
                    <Col span = {1} md = {3}>
                    </Col>
                    <Col span = {22} md = {18} style={{marginTop: 50, marginBottom:50}}>
                        <Row style={{marginTop:20}}>
                            <Col span = {24} md={12}>
                                <Row style = {{marginTop:50}}>
                                    <ProgramCard
                                        headline = 'International Learning & Development'
                                        description = 'Train & refine your technical skills and experience modern international work culture in Barcelona, Spain'
                                        buttonText = 'Trial 1 Overview'
                                        link = 'url'
                                    />
                                </Row>
                                <Row style = {{marginTop:50, marginBottom: 50}}>
                                    <ProgramCard
                                        headline = 'Online Education Courses'
                                        description = 'Check out the materials in our core curriculum to learn what technologies are out there for you to explore'
                                        buttonText = 'Core Curriculum'
                                        link = 'url'
                                    />
                                </Row>
                            </Col>
                            <Col span={24} md={12}>
                                <Row>
                                    <ProgramCard
                                        headline = 'Employee Technical Training'
                                        description = 'Invest in your own employees and provide them with the latest tools to contribute to company growth'
                                        buttonText = 'Free Consultation'
                                        link = 'url'
                                    />
                                </Row>
                                <Row style = {{marginTop:50}}>
                                    <ProgramCard
                                        headline = 'Mentorship'
                                        description = 'Join our mission and help us teach how to teach and learn how to learn'
                                        buttonText = 'Join Slack Channel'
                                        link = 'url'
                                    />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span = {1} md= {3}>
                    </Col>
                </Row>
            </div>
        )
    }
}

class CoreValues extends Component{
    render(){
        return(
            <div style = {{marginTop: 50}}>
                <Row>
                    <Col span = {1} md = {3}>
                    </Col>
                    <Col span = {22} md = {18}>
                        <Row type="flex" justify="space-around">
                            <Col span= {24} md = {10}>
                                <ValueTile
                                    headline = 'Intellectual Freedom'
                                    description = 'It is the right of every individual to both seek and receive information from all points of view without restriction'
                                />
                                <Row style = {{height: 40}}>
                                </Row>
                                <ValueTile
                                    headline = 'Learn by Teaching'
                                    description = 'The deepest understanding of a topic comes when you can teach anyone willing to learn by adapting ideas to their specific educational context'
                                />
                                <Row style = {{height: 40}}>
                                </Row>
                            </Col>

                            <Col span= {24} md = {10}>
                                <ValueTile
                                headline = 'Open-source software "libre"'
                                description = 'To promote true "freedom", users must be able to run software such that it can be studied, changed, adapted, and distributed in any variation'
                                />
                            </Col>

                        </Row>
                    </Col>
                    <Col span = {1} md= {3}>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Blog extends Component{
    render(){
        return(
            <div style = {{marginTop: 50}}>
                <Row>
                    <Col span = {1} md = {3}>
                    </Col>
                    <Col span = {22} md = {18}>
                        <Row type="flex" justify="space-around">
                            <Col span={22} md={6} style = {{marginTop: 15}}>
                                <TestimonyTile
                                    date = '20 april 2022'
                                    headline = 'Some blog headline lorem ipsum'
                                    description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText = 'Link'
                                    link = 'url'
                                />
                            </Col>
                            <Col span={22} md={6} style = {{marginTop: 15}}>
                                <TestimonyTile
                                    date = '20 april 2022'
                                    headline = 'Some blog headline lorem ipsum'
                                    description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText = 'Link'
                                    link = 'url'
                                />
                            </Col>
                            <Col span={22} md={6} style = {{marginTop: 15}}>
                                <TestimonyTile
                                    date = '20 april 2022'
                                    headline = 'Some blog headline lorem ipsum'
                                    description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                    buttonText = 'Link'
                                    link = 'url'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span = {1} md = {3}>
                    </Col>
                </Row>
            </div>
        )
    }
}


class Form extends Component{

    render(){
        return(
            <div style = {{margin: 50}}>
                <Row>
                    <Col span = {0} md = {3}>
                    </Col>
                    <Col span = {24} md = {18}>
                        <Row>
                            <Col span = {24} md = {9}>
                                <Title  level={2} >Stay tuned!</Title>
                            </Col>

                        </Row>
                        <Row>
                            <Col span = {24} md = {12} >
                                <Text >Suscribe to be up to date of our new courses</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col span = {24} md={8} style={{ marginBottom: 20, marginTop:20 }}>
                                <RoundButton
                                    buttonText = 'Submit'
                                    onClick={() => console.log('Submit button clicked')}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span = {24}  md={10} >
                                <AutoComplete
                                    style={{ width: 200}}
                                    placeholder='Email'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span = {0} md= {3}>
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
            <Header>Header</Header>
            <Content>
            <Row type="flex">


                    <Hero/>
                    <Programs/>
                    <CoreValues/>
                    <Blog/>




            </Row>
            <Form/>
            </Content>
            <Footer>Footer</Footer>
        </Layout>

    );
  }
}

export default HomePage;
