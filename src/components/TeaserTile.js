import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import DividerLine from './DividerLine'
import theme from '../styles/theme';
import Title from '../typography/Title';
import Text from '../typography/Text';


const TeaserTile = ({
    headline,
    intro,
    buttonText,
    link
}) => {

    return (

        <Container>
            <Row>
                <Col md={3}>
                    <DividerLine
                        color={theme.colors.primary}
                    />
                </Col>
                <Col md={10}>
                    <Title>
                        {headline}
                    </Title>
                </Col>
                <Col md={20}>
                    <Text>
                        {intro}
                    </Text>
                </Col>
                <Col>
                    <LinkButton
                        description={buttonText}
                        url={link}
                        color={theme.colors.black}
                    />
                </Col>
            </Row>
        </Container>

    )
}

export default TeaserTile
