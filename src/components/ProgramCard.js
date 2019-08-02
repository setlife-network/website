import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Title from '../typography/Title';
import Text from '../typography/Text';

import SDFundamentals from '../assets/images/SDFundamentals.png'


const WrapperCard = styled.div`
    background: ${props => props.filled ? 'white' : '#EFF3F2'};

`

const RectangleDiv = styled(WrapperCard)`
    height:2px;
    margin-top: 15px
`

const ContentDiv = styled(WrapperCard)`
    height:80px;
`

const ImageContainer = styled(Image)`
    height: 70%;
    margin-left: auto;
    margin-right: auto;
    display: block;
`


const ProgramCard = ({
    headline,
    description,
    buttonText,
    link
}) => {
    return (
        <Row>
            <Col md={11}>
                <WrapperCard filled>
                    <Row>
                        <Col md={2}>
                            <RectangleDiv />
                        </Col>
                    </Row>
                    <WrapperCard filled>
                        <Row>
                            <Col md={12}>
                                <Title>
                                    {headline}
                                </Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <ImageContainer src={SDFundamentals} alt='Software development Fundamentals' />
                            </Col>
                            <Col md={7}>
                                <Row>
                                    <ContentDiv filled md={12}>
                                        <Text>
                                            {description}
                                        </Text>
                                    </ContentDiv>
                                    <Col md={12}>
                                        <LinkButton
                                            description={buttonText}
                                            url={link}
                                            color={theme.colors.primary}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </WrapperCard>

                </WrapperCard>
            </Col>
        </Row>
    )

}

export default ProgramCard
