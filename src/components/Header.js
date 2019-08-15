import React from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col, Nav
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import logo from '../assets/images/logoPositive.png'
import theme from '../styles/theme';
import Title2 from './Title2'
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

            <Navbar>
                <HeaderImage src={logo} />


                <Text>
                Learn to code. Change things
                </Text>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>

                    <Nav.Link href='#home'>
                        <Text>
                        Mision
                        </Text>
                    </Nav.Link>
                    <Nav.Link href='#home'>
                        <Text>
                        Curriculum
                        </Text>
                    </Nav.Link>
                    <Nav.Link href='#home'>
                        <Text>
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
