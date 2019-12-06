import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import DividerLine from './DividerLine'
import theme from '../styles/theme';
import Text from './Text';


const TitleWrapper = styled(Col)`

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
                    className='h3'
                >
                    {headline}
                </Text>
            </TitleWrapper>
            <Col md={11}>
                <Text
                    className='body'
                >
                    {intro}
                </Text>
            </Col>
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
