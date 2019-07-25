import React, { Component } from 'react';
import {
    Row, Col, Typography, Layout, AutoComplete, Button, Radio, Icon
} from 'antd';


import LinkButton from './LinkButton'


const { Title, Paragraph, Text } = Typography;

const TeaserTile = ({
    headline,
    intro,
    buttonText,
    link
}) => {

    return (
        <Col
            span={24}
            md={6}
            style={{
                marginTop: 50
            }}
        >
            <Row>
                <Col
                    span={6}
                    style={{
                        height: 2,
                        background: 'rgb(0,194,212)'
                    }}
                >
                </Col>
            </Row>
            <Row style={{
                marginTop: 10,
                height: 50
            }}
            >
                <Col span={18}>
                    <Title level={4}>
                        {headline}
                    </Title>
                </Col>
            </Row>
            <Row style={{ height: 160 }}>
                <Col span={24}>
                    <Text
                        type='secondary'
                        style={{
                            display: 'block',
                            textAlign: 'justify',
                            fontSize: 16,
                            fontFamily: 'Arial'
                        }}
                    >
                        {intro}
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col style={{
                    margin: 5
                }}
                >
                    <LinkButton
                        description={buttonText}
                        url={link}
                        color='black'
                    />
                </Col>
            </Row>
        </Col>

    )
}

export default TeaserTile
