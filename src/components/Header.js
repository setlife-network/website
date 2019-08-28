import React from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col, Nav
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import logo from '../assets/images/logoPositive.png'
import theme from '../styles/theme';
import Text from './Text'
import FilledButton from './FilledButton'

const ButtonContainer = styled(Row)`
    margin:10px
`

const HeaderImage = styled(Image)`
height: 40px;
`


const Header = () => (
    <Row>
        <Col md={1}>
        </Col>
        <Col md={10}>

            <Navbar expand='lg'>

                <Navbar.Toggle />

                <HeaderImage src={logo} />


                <Text>
                Learn to code. Change things
                </Text>


                <Navbar.Collapse className='justify-content-end'>

                    <Nav.Link href='#home'>
                        <Text size={theme.sizes.button}>
                        Mision
                        </Text>
                    </Nav.Link>
                    <Nav.Link href='#home'>
                        <Text size={theme.sizes.button}>
                        Curriculum
                        </Text>
                    </Nav.Link>
                    <Nav.Link href='#home'>
                        <Text size={theme.sizes.button}>
                        Programs
                        </Text>
                    </Nav.Link>
                    <ButtonContainer>
                        <FilledButton
                            description='Get a free consultations'
                        />
                    </ButtonContainer>
                </Navbar.Collapse>
            </Navbar>


        </Col>
        <Col md={1}>
        </Col>


    </Row>
)

export default Header
