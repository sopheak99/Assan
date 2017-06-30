import React from 'react';
import { Col, Row } from 'react-bootstrap';
export default class Whatewe extends React.Component {
    constructor() {
        super();
        this.state = {
            what: [],
            Items: []
        }
    }
    componentWillMount() {
        this.state.what =
            [
                {
                    tittle: 'WHAT WE DO',
                    description: 'We want to present you a simple and functional template “ASSAN”. It is a powerful Multi-Purpose HTML 5 Template. Build whatever you like with this Template that looks effortlessly on-point in Business'
                }
            ]

        this.state.Items =
            [
                {
                    icon: 'pe-7s-magic-wand',
                    tittle1: 'Free support & updates',
                    description1: ' vulputate lorem ut leo. Sed volutpat. Etiam non pede. Nullam et mauris.'
                },
                {
                    icon: 'pe-7s-phone',
                    tittle1: 'ULTRA RESPONSIVE',
                    description1: ' Nullam lorem ut leo. Sed volutpat. Etiam non pede. Nullam et mauris.'
                },
                {
                    icon: 'pe-7s-like',
                    tittle1: 'MADE WITH LOVE',
                    description1: ' Nullam vulputate  leo. Sed volutpat. Etiam non pede. Nullam et mauris.'
                },
                {
                    icon: 'pe-7s-folder',
                    tittle1: 'PREMIUM PLUGINS',
                    description1: ' Nullam vulputate lorem ut leo. Etiam non pede. Nullam et mauris.'
                }
            ]
    }
    render() {
        var what = this.state.what.map(whatis => {
            return (
                <div>
                    <Col md={12}>
                        <center>
                            <h2>{whatis.tittle}</h2>
                            <p className="sub-text">{whatis.description}</p>
                        </center>
                    </Col>
                </div>
            )
        })

        var Items = this.state.Items.map(item => {
            return (
                <div>
                    <Col sm={3}>
                        <center>
                            <i className={item.icon}></i>
                        </center>
                        <h3>{item.tittle1}</h3>
                        <h4>{item.description1}</h4>
                    </Col>
                </div>
            )
        })
        return (

            <div className="row">
                <div className="box-icon">
                    {what}
                    {Items}
                </div>
            </div>


        )
    }
}