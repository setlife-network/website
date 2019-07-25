import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';

import LinkButton from './LinkButton'

const { Title, Paragraph, Text } = Typography;

const ValueTile = ({
    headline,
    description
}) => {
    return (
        <Row type='flex' justify='space-around'>
            <Col span={6}>
                <img src='./assets/blueArrow.png' alt='Blue Arrow' />
            </Col>
            <Col span={16}>
                <Row>
                    <Col span={24}>
                        <Title level={4}>
                            {headline}
                        </Title>
                    </Col>
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
                            {description}
                        </Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ValueTile
