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

    render() {
        const { size } = this.state;
        const { buttonText, onClick } = this.props;

        return(
            <Button
                className='RoundButton'
                type="primary"
                shape="round"
                onClick={onClick}
            >
                {buttonText}
            </Button>
        )
    }
 }




class SimpleHolder extends Component{
    render() {

        return (
            <div>
                <Row className='simpleHolder'>
                    <Form/>

                </Row>
            </div>

        )
    }
}

class Form extends Component{

    render(){
        return(
            <div>
            <Row className = "head" id = "form">
                <Col span={8}>
                    <Title level={2}>Stay tuned!</Title>
                    <Text >Suscribe to be up to date of our new courses</Text>
                    <RoundButton
                        buttonText='Submit'
                        onClick={() => console.log('Submit button clicked')}
                    />
                </Col>
            </Row>
            <Row className = "body" id = "form">
                <Col span={24}>
                    <AutoComplete
                    style={{ width: 200 }}
                    placeholder="Email"
                    />

                </Col>
            </Row>
            </div>
        )
    }

}

class App extends Component {
  render() {
    return (
        <div className="App">
            <Layout>
                <Header>Header</Header>
                <Content>
                    <SimpleHolder/>

                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
  }
}

export default App;
