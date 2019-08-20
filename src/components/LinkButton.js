import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import Text from './Text';

const LinkButton = ({
    color,
    url,
    description,
    weight
}) => {
    return (
        <Row>
            <Col span={18}>
                <a
                    href={url}
                >
                    <Text
                        weight={weight}
                        uppercase
                        color={color}
                        size={theme.sizes.link}

                    >
                        {description}
                    </Text>
                </a>
            </Col>
        </Row>
    )
}


LinkButton.defaultProps = {
    color: theme.colors.primary
}


export default LinkButton
