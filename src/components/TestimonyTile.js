import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';

import LinkButton from './LinkButton'

const { Title, Paragraph, Text } = Typography;

const TestimonyTile = ({
    date,
    headline,
    description,
    buttonText,
    link
}) => {
    return (
        <Row>
            <Row>
                <Col span={24}>
                    <Text
                        strong
                        style={{
                            display: 'block',
                            textAlign: 'left',
                            color: 'black',
                            textTransform: 'uppercase',
                            fontFamily: 'Arial',
                            letterSpacing: 0.2,
                            fontSize: 10
                        }}
                    >
                        {date}
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title
                        level={4}
                        style={{
                            color: 'rgb(0,194,212)'
                        }}
                    >
                        {headline}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Text type='secondary'>
                        {description}
                    </Text>
                </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
                <Col span={12}>
                    <LinkButton
                        description={buttonText}
                        url={link}
                        color='black'
                    />
                </Col>
            </Row>
        </Row>
    )

}

export default TestimonyTile
