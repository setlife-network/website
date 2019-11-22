import React from 'react';
import {
    Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import Text from './Text';

import arrowBlack from '../assets/images/arrowRight.png'
import arrowBlue from '../assets/images/arrowRightBlue.png'


const LinkButton = ({
    color,
    url,
    description,
    weight
}) => {
    console.log(color);
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
                    {
                        color === theme.colors.primary ? (
                            <img src={arrowBlue} alt='arrow' />
                        ) : (
                            <img src={arrowBlack} alt='arrow' />
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
