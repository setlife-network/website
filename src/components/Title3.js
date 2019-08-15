import styled from 'styled-components';
import theme from '../styles/theme';

/*
properties:
    primary/black
    bold/normal
*/

const Title3 = styled.p`
    font-size: ${theme.sizes.large};
    text-align: left
    padding: 10px;
    color: ${props => props.color};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

Title3.defaultProps = {
    blue: false,
    bold: false,
    color: theme.colors.black,
}

export default Title3
