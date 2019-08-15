import styled from 'styled-components';
import theme from '../styles/theme';


const Title1 = styled.p`
    font-size: 40px;
    fontFamily: Arial;
    text-align: ${props => props.alignment};
    height:10px;
    color: ${props => props.color};
    font-weight: bold;
`

Title1.defaultProps = {
    color: theme.colors.black,
    weight: 'normal',
    textAlign: 'center'
}

export default Title1
