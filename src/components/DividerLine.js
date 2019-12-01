import styled from 'styled-components'
import {
    Row
} from 'react-bootstrap';
import theme from '../styles/theme';


const DividerLine = styled(Row)`
    height: 1px;
    background: ${props => props.color};
    margin-left: 0px

`

DividerLine.defaultProps = {
    color: theme.colors.primary
}


export default DividerLine
