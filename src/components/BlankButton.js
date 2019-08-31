import React from 'react';
import styled from 'styled-components'
import {
    Col
} from 'react-bootstrap';
import theme from '../styles/theme';
import Text from './Text';

const ButtonContainer = styled(Col)`

    border-color:${theme.colors.white};
    border-style: solid;
    border-radius: 27px;
    border-width:1px;
    height:35px;

`

const BlankButton = ({
    url,
    description
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
                    alignment='center'
                >
                    {description}
                </Text>
            </a>

        </ButtonContainer>
    )
}


export default BlankButton
