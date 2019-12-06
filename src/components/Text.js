import styled from 'styled-components';
import theme from '../styles/theme';

/*
properties:
    bold/normal
    uppercase/lowecase
*/

export const Text = styled.p`

    text-align: ${props => props.alignment};
    color: ${props => props.color};
    font-weight: ${props => props.weight};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'normal'};
    margin-bottom: ${props => props.marginBottom};
`

Text.defaultProps = {
    blue: false,
    bold: false,
    uppercase: false,
    color: theme.colors.black,
    alignment: 'left',
    className: 'Text',
}

export default Text
