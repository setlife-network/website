import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';



import TeaserTile from '../components/TeaserTile';
import LinkButton from '../components/LinkButton'

class Hero extends Component {
    render() {
        return (
            <div>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={10}>
                    <Row>
                        <Col md = {4}>
                        <TeaserTile
                            headline='Tech Education'
                            intro='We’ll teach you the core concepts you need to understand technology and anticipate the impact of its exponential growth on your daily life'
                            buttonText='Core curriculum'
                            link='url'

                        />
                        </Col>
                        <Col md = {4}>
                        <TeaserTile
                            headline='Project-based Learning'
                            intro='We’ll help you apply new knowledge directly to existing community projects (or help you start your own!) so that you can train your skills and gain valuable work experience'
                            buttonText='Explore projects'
                            link='url'

                        />
                        </Col>
                        <Col md = {4}>
                        <TeaserTile
                            headline='Tech Education'
                            intro='We are committed to leveraging cutting-edge technology to your every advantage by creating tools that make development as simple as possible'
                            buttonText='Documentation'
                            link='url'

                        />
                        </Col>
                    </Row>
                </Col>
                <Col  md={1}>
                </Col>
            </Row>
            </div>
        )
    }
}

export default Hero
