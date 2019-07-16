import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { AutoComplete } from 'antd';
import { Button, Radio, Icon } from 'antd';
import './App.css';


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


class Form extends Component{

    render(){
        return(
            <div style = {{margin: 50}}>
                <Row span = {24}>
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
                </Row>
            </div>
        )
    }

}

class App extends Component {
  render() {
    return (
        <div className='App'>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <Form/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>

      </div>
    );
  }
}

export default App;
