import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';
import BlueArrow from '../assets/images/blueArrow.png'
import Title from './Title';
import Text from './Text';


const ContentDiv = styled.div`
    height:80px;
`

const ValueTile = ({
    headline,
    description
}) => {
    return (
        <Row>
            <Col md={2}>
                <img src={BlueArrow} alt='Blue Arrow' />
            </Col>
            <Col md={10}>
                <Row>
                    <Col md={12}>
                        <Title
                            size={theme.sizes.medium}
                        >
                            {headline}
                        </Title>
                    </Col>
                    <Col md={12}>
                        <ContentDiv>
                            <Text>
                                {description}
                            </Text>
                        </ContentDiv>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ValueTile
