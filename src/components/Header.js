import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Image, Row, Col, Nav, Button
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import { HEADERLINKS, HEADERBUTTON, ChangeLanguage } from '../content/constants'

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

class Header extends Component {

    renderHeaderLinks = () => {
        return HEADERLINKS.map(t => {
            return (
                <Nav.Link href={t.href} key={t.key}>
                    <Text size={theme.sizes.button}>
                        {t.text}
                    </Text>
                </Nav.Link>

            )
        })
    }

    renderHeaderButton = () => {
        return HEADERBUTTON.map(t => {
            return (
                <ButtonContainer key={t.key}>
                    <FilledButton
                        description={t.description}
                        url={t.url}
                    />
                </ButtonContainer>
            )
        })
    }

    render() {
        return (
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
                                            <Button variant='primary' onClick={ChangeLanguage}>Primary</Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Navbar.Collapse className='justify-content-end'>

                            {this.renderHeaderLinks()}
                            {/* {this.renderHeaderButton()} */}
                        </Navbar.Collapse>
                    </Navbar>

                </Col>


            </Row>
        )
    }

}

export default Header
