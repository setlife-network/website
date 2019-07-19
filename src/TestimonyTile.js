import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import LinkButton from './LinkButton.js'

const { Title, Paragraph, Text } = Typography;

const TestimonyTile = (props) => {
    return(
        <Row>
            <Row>
                <Col span = {24}>
                    <Text strong style = {{display: 'block', textAlign: 'left', color:'black', textTransform: 'uppercase', fontFamily: 'Arial', letterSpacing: 0.2, fontSize: 10}}>
                        {props.date}
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level = {4} style = {{color: 'rgb(0,194,212)'}}>
                        {props.headline}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Text type="secondary">
                        {props.description}
                    </Text>
                </Col>
            </Row>
            <Row style = {{marginTop: 30}}>
                <Col span={12}>
                    <LinkButton
                        description = {props.buttonText}
                        url = {props.link}
                        color = 'black'
                    />
                </Col>
            </Row>
        </Row>
    )

}

export default TestimonyTile
