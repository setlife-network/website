import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import DividerLine from './DividerLine'
import theme from '../styles/theme';
import Text from './Text';

const TextWrapper = styled(Col)`
    height:150px
`

const TitleWrapper = styled(Col)`
    height:100px
    margin-top: 10px;
`

const Section = styled(Row)`
    padding-top: 80px;
`


const TeaserTile = ({
    headline,
    intro,
    buttonText,
    link
}) => {

    return (

        <Row className='py-5'>
            <Col xs={2}>
                <DividerLine
                    color={theme.colors.primary}
                />
            </Col>
            <Col md={12}>
            </Col>
            <TitleWrapper md={9}>
                <Text
                    bold
                    size={theme.sizes.h3}
                >
                    {headline}
                </Text>
            </TitleWrapper>
            <TextWrapper md={11}>
                <Text
                    size={theme.sizes.body}
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
