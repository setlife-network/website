import React from 'react';
import styled from 'styled-components'
import {
    Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import DividerLine from '../components/DividerLine';
import Title from '../components/Title';
import Text from '../components/Text';
import QuoteIcon from '../assets/images/quote.png'


const ImageContainer = styled(Image)`
    align:center;
    width: 50%;
`

const Section = styled(Row)`
    padding-top: 40px;
    padding-bottom:40px;

`
const Container = styled(Col)`
    margin-top:20px
`

const Quote = ({
    headline,
    author,
    company
}) => {
    return (
        <Section>
            <Col xs={10} className='mx-auto'>
                <Row>
                    <Col md={6}>
                        <ImageContainer src={QuoteIcon} alt='quote' />
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={12}>
                                <Title
                                    left
                                    color={theme.colors.primary}
                                    size={theme.sizes.quote}
                                    margin
                                >
                                    {headline}
                                </Title>
                            </Col>
                            <Container md={2} xs={6}>
                                <DividerLine />
                            </Container>
                            <Container md={12}>
                                <Text>
                                    {author}
                                </Text>
                                <Text>
                                    {company}
                                </Text>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Section>
    )
}

export default Quote
