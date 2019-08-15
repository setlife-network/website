import React from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row
} from 'react-bootstrap';

import logo from '../assets/images/setlifelogo.png'
import theme from '../styles/theme';

const HeaderContainer = styled(Container)`
    background-color: ${theme.colors.white};
    padding: ${theme.sizes.small};
`

const HeaderImage = styled(Image)`
    height: ${theme.sizes.xlarge}
`

const Header = () => (
    <HeaderContainer>
        <Row>
            <HeaderImage src={logo} />
        </Row>
    </HeaderContainer>
)

export default Header
