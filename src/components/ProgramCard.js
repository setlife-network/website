import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';

import LinkButton from './LinkButton'

const { Title, Paragraph, Text } = Typography;

const ProgramCard = ({
    headline,
    description,
    buttonText,
    link
}) => {
    return (
        <Row type='flex' justify='space-around'>
            <Col
                span={24}
                md={22}
                style={{
                    background: 'white'
                }}
            >
                <Row>
                    <Col
                        span={2}
                        style={{
                            background: '#EEEEEE',
                            height: 2,
                            marginTop: 15
                        }}
                    >
                    </Col>
                </Row>
                <Row style={{
                    padding: 20
                }}
                >
                    <Row>
                        <Col span={24}>
                            <Title level={4}>
                                {headline}
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <img src='./assets/SDFundamentals.png' alt='Software development Fundamentals' />
                        </Col>
                        <Col span={16} style={{ padding: 20, height: 140 }}>
                            <Text
                                type='secondary'
                                style={{
                                    display: 'block',
                                    textAlign: 'justify',
                                    fontSize: 16,
                                    fontFamily: 'Arial'
                                }}
                            >
                                {description}
                            </Text>
                        </Col>
                        <Col span={16} offset={9}>
                            <LinkButton
                                description={buttonText}
                                url={link}
                                color='rgb(0,194,212)'
                            />
                        </Col>
                    </Row>

                </Row>

            </Col>
        </Row>
    )

}

export default ProgramCard
