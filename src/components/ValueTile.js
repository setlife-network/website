import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';

import theme from '../styles/theme';
import BlueArrow from '../assets/images/blueArrow.png'
import Text from './Text';


const ContentWrapper = styled(Col)`
    height:150px;
`

const Wrapper = styled(Row)`

`

const ValueTile = ({
    headline,
    description
}) => {
    return (
        <Row className='py-5'>
            <Col xs={2}>
                <img src={BlueArrow} alt='Blue Arrow' />
            </Col>
            <Col xs={10}>
                <Row>
                    <Col md={12}>
                        <Text
                            size={theme.sizes.h3}
                            weight='bold'
                        >
                            {headline}
                        </Text>
                    </Col>
                    <ContentWrapper md={12}>
                        <Text>
                            {description}
                        </Text>
                    </ContentWrapper>

                </Row>
            </Col>
        </Row>
    )
}

export default ValueTile
