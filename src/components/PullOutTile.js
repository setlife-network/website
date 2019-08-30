import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import DividerLine from './DividerLine'
import theme from '../styles/theme';
import Title from './Title';
import Text from './Text';


const PullOutTile = ({
    headline,
    intro,
    color,
    filled
}) => {

    return (

        <Row>
            <Col md={2}>
                <DividerLine
                    color={theme.colors.primary}
                />
            </Col>
            <Col md={11}>
                <Title
                    size={theme.sizes.medium}
                    bold
                    color={color}
                >
                    {headline}
                </Title>
            </Col>
            <Col md={12}>
                <Text
                    color={color}
                >
                    {intro}
                </Text>
            </Col>
        </Row>

    )
}

export default PullOutTile
