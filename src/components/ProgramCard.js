import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';
import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Text from './Text';
import DividerLine from './DividerLine'

const WrapperCard = styled(Row)`
    background: ${theme.colors.white};
    margin-top:30px;
    padding-top:10px;
    padding-bottom:10px;
`

const ImageContainer = styled('div')`
    height: 120px;
    width: 120px;
    border-radius: 60px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`

const TitleWrapper = styled(Col)`
    height:140px;
    margin-top:5px
`

const ConstantWrapper = styled(Col)`
    min-height:160px
`

const DividerWrapper = styled(Col)`
    margin-right:70%;
    margin-left:-15px;
`


const ProgramCard = ({
    headline,
    description,
    color,
    buttonText,
    link,
    image
}) => {

    return (


        <WrapperCard>
            <DividerWrapper md={2}>
                <DividerLine
                    color={theme.colors.grey}
                />
            </DividerWrapper>
            <TitleWrapper md={12}>
                <Text
                    weight='bold'
                    className='h3'
                >
                    {headline}
                </Text>
            </TitleWrapper>
            <Col xs={12} xl={4}>
                <ImageContainer
                    style={{ backgroundImage: `url(${image})` }}
                    className='mx-auto'
                />
            </Col>
            <ConstantWrapper xs={12} xl={7} className='pt-3 pt-xl-0'>
                <Text
                    className='body'
                >
                    {description}
                </Text>
                <LinkButton
                    description={buttonText}
                    url={link}
                    color={color}

                >
                    {buttonText}
                </LinkButton>
            </ConstantWrapper>

        </WrapperCard>


    )

}

export default ProgramCard
