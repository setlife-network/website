import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Title from './Title';
import Text from './Text';


const ContentDiv = styled(Col)`
    min-height:100px;

`

const ImageContainer = styled(Col)`
    height: 250px;
    width: 70%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`

const TestimonyTile = ({
    portrait,
    date,
    headline,
    description,
    buttonText,
    link
}) => {
    return (
        <Row>
            {
                portrait
                && (
                    <Col md={12}>
                        <ImageContainer
                            style={{ backgroundImage: `url(${portrait})` }}
                        />
                    </Col>
                )
            }
            {
                date
                && (
                    <Col md={12}>
                        <Text
                            weight='bold'
                            uppercase
                        >
                            {date}
                        </Text>
                    </Col>
                )
            }
            {
                headline
                && (
                    <Col md={12}>
                        <Title
                            bold
                            color={theme.colors.primary}
                            size={theme.sizes.medium}
                        >
                            {headline}
                        </Title>
                    </Col>
                )
            }
            {
                description
                && (
                    <ContentDiv md={12}>
                        <Text>
                            {description}
                        </Text>
                    </ContentDiv>
                )
            }
            {
                link
                && (
                    <Col md={3}>
                        <LinkButton
                            description={buttonText}
                            url={link}
                            color={theme.colors.black}
                            weight='bold'
                        />
                    </Col>
                )
            }
        </Row>

    )

}

export default TestimonyTile
