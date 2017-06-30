import React from 'react';
import { Col, Row } from 'react-bootstrap';
export default class Service extends React.Component {
    constructor() {
        super()
        this.state = {
            Service: [],
            data: []
        }
    }
    componentWillMount() {
        this.state.Service = [
            {
                icon: 'fa fa-tablet',
                tittle: 'Fully Responsive',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'
            },
            {
                icon: 'fa fa-twitter',
                tittle: 'BOOTSTRAP 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'
            },
            {
                icon: 'fa fa-code',
                tittle: '250+ VALID HTML5 PAGES AND MUCH MORE...',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'
            }
        ]
        this.state.data = [
            {
                number: '0',
                sign: '+',
                description1: 'Downloads'
            },
            {
                number: '87',
                description1: 'Happy Customers'
            },
            {
                number: '2',
                sign: '+',
                description1: 'Valid Layouts'
            },
            {
                number: '113',
                description1: 'Cups Of Tea'
            }
        ]
    }
    render() {
        var Service = this.state.Service.map(service => {
            return (
                <div className="lineheight">
                    <Col md={6}>
                        <div className="services-box-icon">
                            <i className={service.icon}></i>
                        </div>

                        <div className="services-box-info">
                            <h4>{service.tittle}</h4>
                            <h5>
                                {service.description}
                            </h5>
                        </div>
                    </Col>

                </div>
            )
        })
        var data = this.state.data.map(item => {
            return <div>
                <Col md={3}>
                    <div className="download">
                        <h3><span className="counter">{item.number}</span>{item.sign}<h4>{item.description1}</h4></h3>
                    </div>
                </Col>
            </div>
        })
        return (
            <div>

                <Col md={6}>
                    <img src="team.png" height="500" width="700" />
                </Col>
                <center>

                    <h2>CORE FEATURES OF <span className="colored-text">ASSAN</span></h2>

                </center>
                {Service}

                <a href="#" className="btn btn-theme-dark btn-lg">Purchase Now</a>
                
                    <Col md={12}>
                        <section className="fun-fact-wrap fun-facts-bg">
                            {data}
                        </section>
                    </Col>
                </div>
         
        )
    }
}