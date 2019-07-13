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




class SimpleHolder extends Component{
    render(){
        return(
            <div>
                <Row clasName = 'simpleHolder' >
                    <Form/>

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
                    <Col xs={3} sm={3} md={2} lg={1} />
                    <Col xs={20} sm={10} md={8} lg={7} >
                        <Title  level={2} >Stay tuned!</Title>
                    </Col>
                     <Col xs={20} sm={16} md={12} lg={8} xl={4}/>
                </Row>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={3} />
                    <Col xs={20} sm={10} md={8} lg={8}>
                        <Text style = {{ float: 'left'}}>Suscribe to be up to date of our new courses</Text>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={1} />
                    <Col xs={20} sm={10} md={8} lg={6} style = {{ padding: 20}}>
                        <RoundButton
                            buttonText = 'Submit'
                            onClick={() => console.log('Submit button clicked')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={3} />
                    <Col xs={20} sm={10} md={8} lg={1}>
                        <AutoComplete
                            style={{ width: 200}}
                            placeholder='Email'
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
        <div className='App'>
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
