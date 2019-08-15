import React from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col, Nav
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import logo from '../assets/images/logoNegative.png'
import theme from '../styles/theme';
import Title2 from '../components/Title2'
import Text from '../components/Text'
import FilledButton from '../components/FilledButton'


const HeaderImage = styled(Image)`
    height: 40px;
     vertical-align: middle;
`
const Section = styled(Row)`
    padding-top:18px;
    padding-bottom:18px;
    background: ${theme.colors.deepBlack}
    vertical-align: middle;
`


const Header = () => (
    <Section>
        <Col md={1}>
        </Col>
        <Col md={10}>

            <Navbar>
                <HeaderImage src={logo} />
                <Navbar.Toggle />
                <Text color={theme.colors.white}>
                    © Setlife 2019
                </Text>

            </Navbar>


        </Col>
        <Col md={1}>
        </Col>

    </Section>
)

export default Header
