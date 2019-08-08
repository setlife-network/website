import styled from 'styled-components';
import theme from '../styles/theme';


const Title1 = styled.p`
    font-size: 40px;
    fontFamily: Arial;
    text-align: left;
    height:10px;
    color: ${props => props.blue ? theme.colors.primary : theme.colors.black};
    font-weight: bold;
`


export default Title1
