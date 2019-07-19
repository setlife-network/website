import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { AutoComplete } from 'antd';
import { Button, Radio, Icon } from 'antd';
import LinkButton from './LinkButton.js'
import './App.css';

const { Title, Paragraph, Text } = Typography;

const TeaserTile = (props) => {

    return(
        <Col span = {24} md = {6} style = {{marginTop: 50}} >
            <Row>
                <Col span={6} style={{height: 2, background : 'rgb(0,194,212)'}}>
                </Col>
            </Row>
            <Row style = {{marginTop: 10,height: 50}}>
                <Col span={18}>
                    <Title level= {4}>
                       {props.headline}
                    </Title>
                </Col>
            </Row>
            <Row style = {{height: 160}}>
                <Col span={24}>
                    <Text type="secondary" style = {{display: 'block', textAlign: 'justify', fontSize: 16, fontFamily:'Arial'}}>
                        {props.intro}
                    </Text>
                </Col>
            </Row>
            <Row >
                <Col style={{margin: 5}}>
                    <LinkButton
                        description = {props.buttonText}
                        url = {props.link}
                        color = 'black'
                    />
                </Col>
            </Row>

        </Col>

    )
}

export default TeaserTile
