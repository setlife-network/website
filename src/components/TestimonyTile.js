import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Title from '../typography/Title';
import Text from '../typography/Text';


const ContentDiv = styled.div`
    height:50px;
`

const TestimonyTile = ({
    date,
    headline,
    description,
    buttonText,
    link
}) => {
    return (
        <Row>
            <Row>
                <Col md={12}>
                    <Text bold uppercase>
                        {date}
                    </Text>
                </Col>
                <Col md={12}>
                    <Title blue>
                        {headline}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <ContentDiv>
                        <Text>
                            {description}
                        </Text>
                    </ContentDiv>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <LinkButton
                        description={buttonText}
                        url={link}
                        color='black'
                    />
                </Col>
            </Row>
        </Row>
    )

}

export default TestimonyTile
