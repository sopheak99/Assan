import React from 'react';
import { Col, Carousel, Item, Caption, Button, ButtonToolbar } from 'react-bootstrap';
export default class Slideshow extends React.Component {
    render() {
        return (
            <div className="fullscreen">
                <Col xs={12} sm={12} md={12} className="fullscreen">
                    <Carousel>
                        <Carousel.Item>
                            <img alt="900x500" src="slide1.jpg"/>
                            <div className="purchase">
                                <h1> Powerful multipurpose </h1>
                                <h1> Business Template</h1>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p> lectus. Cras porta nisl at tincidunt tincidunt. </p>
                                <ButtonToolbar>
                                    <Button bsStyle="info" href="#">Purchase Now</Button>
                                    <Button bsStyle="#00FFFF" href="#">View Feature</Button>
                                </ButtonToolbar>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img alt="900x500" src="slide2.jpg" />
                            <div className="purchase">
                                <h1> Powerful multipurpose </h1>
                                <h1> Business Template</h1>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p> lectus. Cras porta nisl at tincidunt tincidunt. </p>
                                <ButtonToolbar>
                                    <Button bsStyle="info" href="#">Purchase Now</Button>
                                    <Button bsStyle="#00FFFF" href="#">View Feature</Button>
                                </ButtonToolbar>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="slide3.jpg" />
                            <Carousel.Caption>

                                <h1>   Perfect for startup </h1>
                                <p>Assan is a creative multipurpose theme, you can use it for</p>
                                <p> business, corporate, portfolio, shop events, personal and more... </p>
                                <div className="viewfeature">
                                    <ButtonToolbar>
                                        <Button bsStyle="#00FFFF" border="2" href="#">View Feature</Button>
                                    </ButtonToolbar>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </div>
        )
    }
}