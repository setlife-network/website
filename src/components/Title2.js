import styled from 'styled-components';
import theme from '../styles/theme';


const Title2 = styled.p`
    font-size: ${theme.sizes.xlarge};
    text-align: ${props => props.alignment};
    padding: 10px;
    color: ${props => props.color};
    font-weight: ${props => props.weight};
`
Title2.defaultProps = {
    color: theme.colors.primary,
    weight: 'normal',
    textAlign: 'center'
}

export default Title2
