import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';


const { Title, Paragraph, Text } = Typography;

const LinkButton = ({
    color,
    url,
    description
}) => {
    return (
        <Row>
            <Col span={18}>
                <a
                    style={{
                        display: 'block',
                        textAlign: 'left',
                        color: color,
                        textTransform: 'uppercase',
                        fontFamily: 'Arial',
                        letterSpacing: 2,
                        fontSize: 13
                    }}
                    href={url}
                >
                    {description}
                </a>
            </Col>
        </Row>
    )
}

export default LinkButton
