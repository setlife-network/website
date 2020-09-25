import React from 'react'
import styled from 'styled-components'
import { Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

import logo from '../assets/images/logoNegative.png'
import theme from '../styles/theme'
import Text from '../components/Text'

const HeaderImage = styled(Image)`
    height: 40px;
    vertical-align: middle;
    margin-bottom: 15px;
    margin-right: 10px;
`
const Section = styled(Row)`
    padding-top:18px;
    padding-bottom:18px;
    background: ${theme.colors.deepBlack}
    vertical-align: middle;
`

const Header = () => (
	  <Section>
		    <Col md={11} className='mx-auto'>
			      <Navbar>
				        <HeaderImage src={logo} />
				            <Text color={theme.colors.white}>
                                © Setlife 2020
                            </Text>
			      </Navbar>
		    </Col>
	  </Section>
)

export default Header;
