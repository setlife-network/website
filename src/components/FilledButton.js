import React from 'react';
import styled from 'styled-components'
import {
    Col
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import theme from '../styles/theme';
import Text from './Text';

const ButtonContainer = styled(Button)`

    background-color: ${theme.colors.primary};
    border-radius: 27px;
    height:40px;
    border-color:${theme.colors.primary};
    padding-right:30px;
    padding-left:30px;
`

const FilledButton = ({
    description,
    url
}) => {
    return (
        <ButtonContainer variant='info'>
            <a
                href={url}
                style={{ textDecoration: 'none' }}
                target='_blank'
                rel='noopener noreferrer'
            >
                <Text
                    color={theme.colors.white}
                    size={theme.sizes.button}
                    alignment='center'
                >
                    {description}
                </Text>
            </a>

        </ButtonContainer>
    )
}


export default FilledButton
