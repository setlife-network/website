import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Image, Row, Col, Nav, Button, Dropdown, ButtonGroup, DropdownButton
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import logo from '../assets/images/logoPositive.png'
import spanishFlag from '../assets/images/spanishFlag.png'
import usFlag from '../assets/images/usFlag.png'
import theme from '../styles/theme';
import Text from './Text'
import FilledButton from './FilledButton'

const ButtonContainer = styled(Row)`
    margin:10px
`

const Container = styled(Row)`
    display: flex;
    align-items: center;
`

const HeaderImage = styled(Image)`
    height: 40px;
    margin-bottom:15px;
    margin-right:10px
`

const IconImage = styled(Image)`
    height: 30px;
    margin-right: 5px;
`

class Header extends Component {

    renderHeaderLinks = () => {
        const { HEADERLINKS } = this.props.content
        return HEADERLINKS.map(t => {
            return (
                <Nav.Link href={t.href} key={t.key}>
                    <Text
                        size={theme.sizes.link}
                        weight='bold'
                    >
                        {t.text}
                    </Text>
                </Nav.Link>

            )
        })
    }

    renderHeaderButton = () => {
        const { HEADERBUTTON } = this.props.content
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
        const { HEADERDROPDOWN } = this.props.content
        const { HEADERHEADLINE } = this.props.content
        const flag = this.props.language == 'english' ? usFlag : spanishFlag

        return (
            <Row>

                <Col md={10} className='mx-auto pt-2'>
                    <Navbar expand='lg' className='align-items-center'>
                        <Row>
                            <Col xs={2}>
                                <Navbar.Toggle />
                            </Col>
                            <Col xs={{ span: 6, offset: 2 }} md={12}>
                                <Container>
                                    <HeaderImage src={logo} />
                                    <Text
                                        alignment='center'
                                    >
                                        {HEADERHEADLINE.slogan}
                                    </Text>
                                </Container>

                            </Col>
                        </Row>

                        <Navbar.Collapse className='justify-content-end'>

                            {this.renderHeaderLinks()}
                            {/* {this.renderHeaderButton()} */}

                            <DropdownButton size='sm' title={<IconImage src={flag} />} variant='info'>
                                <Dropdown.Item onClick={() => this.props.changeLanguage('english')}>
                                    <IconImage src={usFlag} />
                                    {HEADERDROPDOWN.english}
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => this.props.changeLanguage('spanish')}>
                                    <IconImage src={spanishFlag} />
                                    {HEADERDROPDOWN.spanish}
                                </Dropdown.Item>
                            </DropdownButton>

                        </Navbar.Collapse>

                    </Navbar>

                </Col>


            </Row>
        )
    }

}

export default Header
