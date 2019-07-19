import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const LinkButton = (props) => {
    return(
        <Row>
            <Col span={18}>
                <a style = {{display: 'block', textAlign: 'left', color: props.color, textTransform: 'uppercase', fontFamily: 'Arial', letterSpacing: 2, fontSize: 13}} href={props.url}>
                {props.description}
                </a>
            </Col>
        </Row>
    )
}

export default LinkButton
