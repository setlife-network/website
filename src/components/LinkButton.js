import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import Title from '../typography/Title';
import Text from '../typography/Text';


const LinkButton = ({
    color,
    url,
    description
}) => {
    return (
        <Row>
            <Col span={18}>
                <a
                    href={url}
                >
                    <Text uppercase>
                        {description}
                    </Text>
                </a>
            </Col>
        </Row>
    )
}

export default LinkButton
