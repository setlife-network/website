import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import theme from '../styles/theme';
import Title from './Title'
import DividerLine from './DividerLine'
import Text from './Text'

const Wrapper = styled(Row)`
    margin-bottom: 50px
`

const Holder = styled(Col)`
    text-align: center;
    margin: auto;

`


const Headline = ({
    headline,
    description,
    color,
    weight,
    alignment
}) => {
    return (
        <Wrapper>
            <Col md={5}>
            </Col>
            <Col md={2}>
                <DividerLine />
            </Col>
            <Col md={5}>
            </Col>
            <Holder md={12}>
                <Title
                    color={color}
                    weight={weight}
                    alignment={alignment}
                    size={theme.sizes.large}
                >
                    {headline}
                </Title>
            </Holder>
            <Holder md={12}>
                <Text
                    color={color}
                    alignment={alignment}
                    size={theme.sizes.regular}
                >
                    {description}
                </Text>
            </Holder>

        </Wrapper>
    )
}

export default Headline
