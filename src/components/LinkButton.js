import React from 'react';
import {
    Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import Text from './Text';

import arrow from '../assets/images/arrowRight.png'


const LinkButton = ({
    color,
    url,
    description,
    weight
}) => {
    return (
        <Row>
            <Col>
                <a
                    href={url}
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Text
                        weight={weight}
                        uppercase
                        color={color}
                        size={theme.sizes.link}
                    >
                        {description}
                    </Text>

                </a>
            </Col>
            <Col
                md={3}
            >
                <a
                    href={url}
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img src={arrow} alt='arrow' />
                </a>
            </Col>
        </Row>
    )
}


LinkButton.defaultProps = {
    color: theme.colors.primary
}


export default LinkButton
