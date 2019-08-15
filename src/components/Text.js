import styled from 'styled-components';
import theme from '../styles/theme';

/*
properties:
    bold/normal
    uppercase/lowecase
*/

export const Text = styled.p`
    font-size: ${theme.sizes.medium}
    font-family: 'Arial';
    text-align: ${props => props.alignment};
    color: ${props => props.color};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'normal'}
    padding: 5px;

`

Text.defaultProps = {
    blue: false,
    bold: false,
    uppercase: false,
    color: theme.colors.black,
    alignment: 'left'
}

export default Text
