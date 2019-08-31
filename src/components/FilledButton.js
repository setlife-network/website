import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import Text from './Text';

const ButtonContainer = styled(Col)`

    background-color: ${theme.colors.primary};
    border-radius: 27px;
    height:35px;

`

const FilledButton = ({
    description,
    url
}) => {
    return (
        <ButtonContainer>
            <a
                href={url}
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
