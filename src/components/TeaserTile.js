import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import DividerLine from './DividerLine'
import theme from '../styles/theme';
import Title from './Title';
import Text from './Text';

const TextWrapper = styled(Col)`
    height:140px
`

const TitleWrapper = styled(Col)`
    height:100px
    margin-top: 10px;
`


const TeaserTile = ({
    headline,
    intro,
    buttonText,
    link
}) => {

    return (

        <Row>
            <Col md={2}>
                <DividerLine
                    color={theme.colors.primary}

                />
            </Col>
            <Col md={12}>
            </Col>
            <TitleWrapper md={9}>
                <Title
                    bold
                    size={theme.sizes.medium}
                >
                    {headline}
                </Title>
            </TitleWrapper>
            <TextWrapper md={12}>
                <Text
                    size={theme.sizes.small}
                >
                    {intro}
                </Text>
            </TextWrapper>
            <Col>
                <LinkButton
                    description={buttonText}
                    url={link}
                    color={theme.colors.black}
                />
            </Col>
        </Row>

    )
}

export default TeaserTile
