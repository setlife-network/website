import styled from 'styled-components';
import theme from '../styles/theme';

const Text = styled.p`
    font-size: ${theme.sizes.medium}
    font-family: 'Arial';
    display: 'block';
    text-align: 'left';
    font-weight: normal;
    color: ${theme.colors.black};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'lowercase'}
`

export default Text;
