import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import DividerLine from './DividerLine'
import Title from './Title'
import Text from './Text';
import FilledButton from './FilledButton'

const Wrapper = styled(Col)`
    margin-top:30px;
`

const TitleWrapper = styled(Title)`
    margin-bottom:-20px;
`
const PrincipalMessage = ({
    headline1,
    headline2,
    description,
    buttonText,
    url
}) => {
    return (
        <Row className='PrincipalMessage'>
            <Col xs={2}>
                <DividerLine />
            </Col>
            <Col xs={12}>
                <Title
                    size={theme.sizes.xlarge}
                    weight='bold'
                >
                    {headline1}
                </Title>
                <Title
                    size={theme.sizes.xlarge}
                    color={theme.colors.primary}
                    weight='bold'
                >
                    {headline2}
                </Title>
            </Col>
            <Wrapper xs={12} md={10}>
                <Text
                    size={theme.sizes.regular}
                >
                    {description}
                </Text>
            </Wrapper>
            
            <FilledButton
                description={buttonText}
                url={url}
            />

        </Row>
    )
}

export default PrincipalMessage
