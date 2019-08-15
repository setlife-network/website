import styled from 'styled-components';
import theme from '../styles/theme';


const Title2 = styled.p`
    font-size: ${theme.sizes.xlarge};
    text-align: ${props => props.left ? 'left' : 'center'};
    padding: 10px;
    color: ${props => props.blue ? theme.colors.primary : theme.colors.black};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`


export default Title2
