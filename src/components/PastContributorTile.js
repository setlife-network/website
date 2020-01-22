import React from 'react';
import styled from 'styled-components'
import {
    Row, Col
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Text from './Text';


const ContentDiv = styled(Col)`
    min-height:100px;

`

const ImageContainer = styled(Col)`
    height: 50px;
    width: 100%;

    background-position: center center;
    background-size: cover;

    background-repeat: no-repeat;
    clip-path: circle(50% at 50% 50%);
`

const PastContributorTile = ({
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


        </Row>

    )

}

export default PastContributorTile
