import React from 'react';
import {
    Row, Col
} from 'react-bootstrap';
import styled from 'styled-components'
import theme from '../styles/theme';
import Text from './Text';
import arrowBlack from '../assets/images/arrowRight.png'
import arrowBlue from '../assets/images/arrowRightBlue.png'

const Container = styled(Row)`
    display: flex;
    align-items: baseline;
`

const Image = styled.img`
    margin-left:30px
`

const LinkButton = ({
    color,
    url,
    description,
    weight
}) => {

    return (

        <Col>
            <a
                href={url}
                style={{ textDecoration: 'none' }}
                target='_blank'
                rel='noopener noreferrer'
            >
                <Container>
                    <Text
                        weight={weight}
                        uppercase
                        color={color}
                        size={theme.sizes.link}
                    >
                        {description}
                    </Text>

                    {
                        color === theme.colors.primary ? (
                            <Image src={arrowBlue} alt='arrow' />
                        ) : (
                            <Image src={arrowBlack} alt='arrow' />
                        )
                    }
                </Container>
            </a>
        </Col>


    )
}


LinkButton.defaultProps = {
    color: theme.colors.primary
}


export default LinkButton
