import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import LinkButton from './LinkButton.js'

const { Title, Paragraph, Text } = Typography;

const ValueTile = (props) =>{
    return(
        <Row type="flex" justify="space-around">
            <Col span={6}>
                <img src={'./assets/blueArrow.png'} alt="Blue Arrow" />
            </Col>
            <Col span={16}>
                <Row>
                    <Col span={24}>
                        <Title level={4}>
                            {props.headline}
                        </Title>
                    </Col>
                    <Col span={24}>
                        <Text type="secondary" style = {{display: 'block', textAlign: 'justify', fontSize: 16, fontFamily:'Arial'}}> 
                            {props.description}
                        </Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ValueTile
