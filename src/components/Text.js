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
    display: 'block';
    text-align: 'left';
    color: ${props => props.blue ? theme.colors.primary : theme.colors.black};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'lowercase'}
    margin-top:25px;
`

Text.defaultProps = {
    blue: false,
    bold: false,
    uppercase: false
}

export default Text
