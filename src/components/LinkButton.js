import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import Text from './Text';

const LinkButton = ({
    color,
    url,
    description
}) => {
    return (
        <Row>
            <Col span={18}>
                <a
                    href={url}
                >

                    {color == theme.colors.primary
                    && (
                        <Text uppercase blue>
                            {description}
                        </Text>
                    )
                    }

                    {color == theme.colors.black
                    && (
                        <Text uppercase>
                            {description}
                        </Text>
                    )
                    }


                </a>
            </Col>
        </Row>
    )
}


LinkButton.defaultProps = {
    color: theme.colors.primary
}


export default LinkButton
