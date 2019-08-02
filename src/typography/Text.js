import styled from 'styled-components';
import theme from '../styles/theme';

/*
properties:
    bold/normal
    uppercase/lowecase
*/

const Text = styled.p`
    font-size: ${theme.sizes.medium}
    font-family: 'Arial';
    display: 'block';
    text-align: 'left';
    font-weight: normal;
    color: ${props => props.blue ? '#00C2D4' : 'black'};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'lowercase'}
`

export default Text;
