import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Row, Col, Overlay, OverlayTrigger, Tooltip, Popover
} from 'react-bootstrap';


import LinkButton from './LinkButton'
import theme from '../styles/theme';
import Text from './Text';


const ImageContainer = styled(Col)`


    position:relative;
    background-position: center center;
    background-size: cover;
    clip-path: circle(50% at 50% 50%);
    padding:50px;

    &:hover:after {
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        background:rgba(0,0,0,0.6);
        opacity:1;
        transition: all 0.8s;
    }

`


class PastContributorTile extends Component {

    renderTooltip = () => {
        return (
            <Popover id='popover-basic'>
                <Popover.Title as='h3'>{this.props.headline}</Popover.Title>
                <Popover.Content>
                    <Text
                        color={theme.colors.primary}
                    >
                        {this.props.date}
                    </Text>
                </Popover.Content>
            </Popover>
        )
    }


    render() {
        return (
            <div style={{ margin: 10, }}>
                <OverlayTrigger
                    placement='bottom'
                    delay={{ show: 100, hide: 400 }}
                    overlay={this.renderTooltip()}
                >

                    <ImageContainer
                        style={{ backgroundImage: `url(${this.props.portrait})` }}
                    />
                </OverlayTrigger>

            </div>
        )
    }
}

export default PastContributorTile
