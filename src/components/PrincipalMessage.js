import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import DividerLine from './DividerLine'
import Text from './Text';
import FilledButton from './FilledButton'

const Wrapper = styled(Col)`
    margin-top:30px;
`

const TitleWrapper = styled(Text)`
    margin-bottom:-30px;
`
const PrincipalMessage = ({
    headline1,
    headline2,
    description,
    buttonText,
    url
}) => {
    return (
        <Row>
            <Col xs={2}>
                <DividerLine />
            </Col>
            <Col xs={12}>
                <Text
                    className='h1'
                    weight='bold'
                >
                    {headline1}
                </Text>
                <Text
                    className='h1'
                    color={theme.colors.primary}
                    weight='bold'
                >
                    {headline2}
                </Text>
            </Col>
            <Wrapper xs={12} md={10}>
                <Text
                    className='subtitle'
                >
                    {description}
                </Text>
            </Wrapper>

            <Wrapper>

                <FilledButton
                    description={buttonText}
                    url={url}

                />
            </Wrapper>

        </Row>
    )
}

export default PrincipalMessage
