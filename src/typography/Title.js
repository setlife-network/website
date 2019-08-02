import styled from 'styled-components';
import theme from '../styles/theme';

/*
properties:
    primary/black
    bold/normal
*/

const Title = styled.p`
    font-size: ${theme.sizes.large};
    fontFamily: Arial;
    text-align: left
    padding: 10px;
    color: ${props => props.blue ? '#00C2D4' : 'black'};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

export default Title;
