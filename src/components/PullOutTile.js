import React from 'react';
import {
    Row, Col
} from 'react-bootstrap';

import DividerLine from './DividerLine'
import theme from '../styles/theme';
import Text from './Text';


const PullOutTile = ({
    headline,
    intro,
    color,
    filled
}) => {

    return (

        <Row>
            <Col md={2}>
                <DividerLine
                    color={theme.colors.primary}
                />
            </Col>
            <Col md={11}>
                <Text
                    size={theme.sizes.medium}
                    bold
                    color={color}
                >
                    {headline}
                </Text>
            </Col>
            <Col md={12}>
                <Text
                    color={color}
                >
                    {intro}
                </Text>
            </Col>
        </Row>

    )
}

export default PullOutTile
