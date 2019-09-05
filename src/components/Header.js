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
    margin-bottom:15px;
    margin-right:10px
`


const Header = () => (
    <Row>

        <Col md={10} className='mx-auto pt-2'>

            <Navbar expand='lg' className='align-items-center'>

                <Row>
                    <Col xs={2}>
                        <Navbar.Toggle />
                    </Col>
                    <Col xs={10} md={12}>
                        <Row>
                            <Col xs={7} md={6} className='mx-auto'>
                                <Row>
                                    <HeaderImage src={logo} />
                                </Row>
                            </Col>
                            <Col xs={7} md={6} className='mx-auto'>
                                <Row>
                                    <Text
                                        alignment='center'
                                    >
                                        People over profit
                                    </Text>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                </Row>


                <Navbar.Collapse className='justify-content-end'>

                    <Nav.Link href='#home'>
                        <Text size={theme.sizes.button}>
                            Programs
                        </Text>
                    </Nav.Link>
                    <Nav.Link href='#home'>
                        <Text size={theme.sizes.button}>
                            Curriculum
                        </Text>
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>


        </Col>


    </Row>
)

export default Header
