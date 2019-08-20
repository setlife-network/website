import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import DividerLine from './DividerLine'
import theme from '../styles/theme';
import Title from './Title';
import Text from './Text';

const Wrapper = styled(Col)`
    height:140px
`


const TeaserTile = ({
    headline,
    intro,
    buttonText,
    link
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
                    <Title
                        size={theme.sizes.medium}
                    >
                        {headline}
                    </Title>
                </Col>
                <Wrapper md={12}>
                    <Text
                        size={theme.sizes.small} 
                    >
                        {intro}
                    </Text>
                </Wrapper>
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
