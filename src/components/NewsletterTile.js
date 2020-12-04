import React from 'react'
import {
    Row, Col
} from 'react-bootstrap';
import moment from 'moment'
import styled from 'styled-components'

import theme from '../styles/theme';

import Text from './Text'


const NewsletterTileDiv = styled(Row)`
    cursor: pointer;
`

const BlueDiv = styled(Col)`
    height: 5px;
    background: ${theme.colors.primary};
    cursor: pointer;
`

const NewsletterTile = ({
    date,
    history
}) => {
    const url = `/newsletters/${date}`
    return(
        <NewsletterTileDiv className='shadow rounded NesletterTile' onClick={()=>(history.push(url))}>
            <BlueDiv xs={12} className='mb-5'/>
            <Col className='px-3  pb-1'>
                <Text weight='bold' fontSize={theme.sizes.subtitle}>
                    {moment(date).format('MMMM YYYY')}
                </Text>
            </Col>
        </NewsletterTileDiv>
    )
}

export default NewsletterTile
