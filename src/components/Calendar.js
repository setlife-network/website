import React, { Component } from 'react'

import { Container, Image, Row, Col } from 'react-bootstrap';
import moment from 'moment'

import { API_ROOT } from '../constants'


// Moment var currentYear  = check.format('YYYY');
const monthCompare = (a, b) => {
    const months = {
        'January-2019.md': 11,
        'February-2019.md': 10,
        'March-2019.md': 9,
        'April-2019.md': 8,
        'May-2019.md': 7,
        'June-2019.md': 6,
        'July-2019.md': 5,
        'August-2019.md': 4,
        'September-2019.md': 3,
        'October-2019.md': 2,
        'November-2019.md': 1,
        'December-2019.md': 0
    }

    return months[a] - months[b]
}

class Calendar extends Component {

    state = {
        newsletters: [],
    }
    componentDidMount() {

        fetch(`${API_ROOT}/fetchAllNewsletters`)
            .then(response => {
                if (response.ok) {
                    return Promise.resolve(response);
                } else {
                    return Promise.reject(new Error(response.statusText));
                }
            })
            .then(response => response.json())
            .then(response => {
                const newsletters = response
                this.setState({ newsletters: newsletters })
            })
            .catch(error => {
                console.log('Looks like there was a problem!', error)
                this.props.history.push('/')
            })

    }


    renderNewsletters = () => {
        // anti pattern
        // this setState();
        const sortedNewsletters = this.state.newsletters.sort(monthCompare)
        return this.state.newsletters.map(t => {

            var url = `/newsletters/${t}`
            url = url.slice(0, -3)
            console.log(url)
            return (
                // <Col>
                    <Row >
                        <Col className='p-3 border border-primary' xs={12} sm={4} >{t}</Col>
                        <Col className='p-3 border border-primary' xs={12} sm={4}>Feb</Col>
                        <Col className='p-3 border border-primary' xs={12} sm={4}>March</Col>
                    </Row>
                // </Col>
            )
        });
    }

    render() {
        const {
            content,
            changeLanguage,
        } = this.props

        return (
            <Container className='' xs={12} sm={4}>
                {this.renderNewsletters()}
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

