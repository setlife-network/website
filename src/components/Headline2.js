import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import theme from '../styles/theme';
import DividerLine from './DividerLine'
import Text from './Text'
import Title from './Title'

const Wrapper = styled(Row)`
    margin-bottom: 150px
`

const Holder = styled(Col)`
    text-align: center
`


const Headline2 = ({
    headline,
    description,
    color,
    weight,
    alignment
}) => {
    return (
        <Wrapper>

            <Col md={2}>
                <DividerLine />
            </Col>
            <Col md={10}>
            </Col>
            <Holder md={8}>
                <Title
                    color={color}
                    weight={weight}
                    alignment={alignment}
                    size={theme.sizes.large}
                >
                    {headline}
                </Title>
            </Holder>
            <Holder md={{ span: 6, offset: 3 }}>
                <Text color={color}>
                    {description}
                </Text>
            </Holder>

        </Wrapper>
    )
}

export default Headline2
