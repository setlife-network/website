import React from 'react';
import styled from 'styled-components'
import {
    Row, Col, Overlay, OverlayTrigger, Tooltip
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Text from './Text';


const ImageContainer = styled(Col)`

    background:red;

    background-position: center center;
    background-size: cover;

    background-repeat: no-repeat;
    clip-path: circle(50% at 50% 50%);
    padding:50px;
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

        <div style={{ margin: 10, }}>
            <OverlayTrigger
                placement='right'
                delay={{ show: 100, hide: 400 }}
                overlay={<Tooltip>{headline}</Tooltip>}
            >

                <ImageContainer
                    style={{ backgroundImage: `url(${portrait})` }}
                />
            </OverlayTrigger>

        </div>

    )

}

export default PastContributorTile
