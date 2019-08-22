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


const ContentWrapper = styled(Col)`
    height:100px;
`

const TitleWrapper = styled(Col)`
    height:100px;
`

const Wrapper = styled(Row)`
    height:250px;
`

const ValueTile = ({
    headline,
    description
}) => {
    return (
        <Wrapper>
            <Col md={2}>
                <img src={BlueArrow} alt='Blue Arrow' />
            </Col>
            <Col md={10}>
                <Row>
                    <TitleWrapper md={12}>
                        <Title
                            size={theme.sizes.medium}
                        >
                            {headline}
                        </Title>
                    </TitleWrapper>

                    <ContentWrapper md={12}>
                        <Text>
                            {description}
                        </Text>
                    </ContentWrapper>

                </Row>
            </Col>
        </Wrapper>
    )
}

export default ValueTile
