import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import DividerLine from './DividerLine'
import theme from '../styles/theme';
import Title3 from './Title3';
import Text from './Text';


const PullOutTile = ({
    headline,
    intro,
    color,
    filled
}) => {

    return (

        <Container>
            <Row>

                <Col md={2}>
                    <DividerLine
                        color={theme.colors.primary}
                    />
                </Col>
                <Col md={11}>
                    <Title3 bold color={color}>
                        {headline}
                    </Title3>
                </Col>
                <Col md={12}>
                    <Text color={color}>
                        {intro}
                    </Text>
                </Col>
            </Row>
        </Container>

    )
}

export default PullOutTile
