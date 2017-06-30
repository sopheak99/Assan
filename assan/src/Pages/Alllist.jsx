import React from 'react';
import { Row, Col } from 'react-bootstrap';
export default class Recent extends React.Component {
    constructor() {
        super();
        this.state = {
            Itembox: []
        }
    }
    componentWillMount() {
        this.state.Itembox =
            [
                {
                    image: 'item1.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                 {
                    image: 'item2.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                 {
                    image: 'item4.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                 {
                    image: 'item8.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                {
                    image: 'item3.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                {
                    image: 'item6.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                {
                    image: 'item7.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                {
                    image: 'item5.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                {
                    image: 'item9.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                {
                    image: 'item10.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                },
                {
                    image: 'item11.jpg',
                    tittle: 'Easy Note',
                    author: 'by Cosmin Capitanu'
                }

            ]
    }
    render() {
        var Itembox = this.state.Itembox.map(item => {
            return (
                <div>
                    <Col sm={3}>
                    <div className="images">
                    <img src={item.image} alt="" className="img-responsive" />
                    <div className="cbp-l-caption-title">{item.tittle}</div>
                    <div className="cbp-l-caption-desc">{item.author}</div>
                      </div>
                </Col>
                </div>
            )
        })
        return (
            <div className="row">
                <center><h2>RECENT PROJECT</h2></center>
                
                        {Itembox}
                  

            </div>
        )
    }
}