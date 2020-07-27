import React, { Component } from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import moment from 'moment'

import { API_ROOT } from '../constants'

const NewsletterTile = (props) => {
    const { fileName, index } = props

    const title = fileName.slice(0, -3) // Remove .md extension

    var url = `/newsletters/${title}`
    url = url.slice(0, -3)

    console.log(fileName)
    console.log(title)
    console.log(url)

    return (
        <Row className='p-3 border border-primary'>

            <div className='p-3 col-12'>
                {title}
            </div>

            <div className='p-3 col-12'>
                {`Newsletter #${index}`}
            </div>

        </Row>
    )
}

class Calendar extends Component {

    renderNewsletters = () => {

        return this.props.sortedNewsletters.map((t, i) => {

            return (
                <NewsletterTile
                    fileName={t}
                    index={i}
                />
            )
        });
    }

    render() {
        const {
            content,
            changeLanguage,
        } = this.props

        return (
            <Container className='row mx-auto'>
                <div className='col-12 col-sm-4'>
                    {this.renderNewsletters()}
                </div>
                <div className='col-12 col-sm-4'>
                    {this.renderNewsletters()}
                </div>
                <div className='col-12 col-sm-4'>
                    {this.renderNewsletters()}
                </div>
            </Container>
            
        );
    }
}

export default Calendar



// <Container className='text-center '>
// {/* <div className='text-center col-centered'> */}
// <div className='pb-2'>
//     2019 
// </div>
// <Row lg={2} className='max-width-670'>
//     <Col className='p-3 border border-primary' xs={12} sm={4} >January</Col>
//     <Col className='p-3 border border-primary' xs={12} sm={4}>Feb</Col>
//     <Col className='p-3 border border-primary' xs={12} sm={4}>March</Col>
// </Row>
// <Row lg={2} className='max-width-670'>
//     <Col className='p-3' xs={12} sm={4}>April</Col>
//     <Col className='p-3' xs={12} sm={4}>May</Col>
//     <Col className='p-3' xs={12} sm={4}>June</Col>
// </Row>
// <Row lg={2}className='max-width-670'>
//     <Col className='p-3' xs={12} sm={4}>July</Col>
//     <Col className='p-3' xs={12} sm={4}>Aug</Col>
//     <Col className='p-3' xs={12} sm={4}>Sep</Col>
// </Row>
// <Row lg={2} className='max-width-670'>
//     <Col className='p-3' xs={12} sm={4}>Oct</Col>
//     <Col className='p-3' xs={12} sm={4}>Nov</Col>
//     <Col className='p-3' xs={12} sm={4}>Dec</Col>
// </Row>
// {/* </div> */}
// </Container>


// renderNewsletters = () => {

//     this.state.newsletters.sort(monthCompare)
//     return this.state.newsletters.map(t => {

//         var url = `/newsletters/${t}`
//         url = url.slice(0, -3)

//         return (
//             <div >
//                 <a href={url}>
//                     {moment(url.slice(13), 'MMM - Y').format('MMMM YYYY')}
//                 </a>
//             </div>
//         )
//     });
// }

