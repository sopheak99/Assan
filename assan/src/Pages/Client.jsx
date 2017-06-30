import React from 'react'

export default class Client extends React.Component {
    constructor() {
        super()
        this.state = {
            Client: []
        }
    }
    componentWillMount() {
        this.state.Client = [
            {
                image: 'teamwork1.jpg',
                description: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
                author: 'Rick man ',
                lastname: 'rock inc'
            }
        ]
    }
    render() {
        var Client = this.state.Client.map(person => {
            return (
                <div>
                    <ul className="slides">
                        <li className="flex-active-slide" >
                            <img src={person.image} alt="" draggable="false" />
                            <h5>
                                <i className="ion-quote"> </i>
                                {person.description}
                            </h5>
                            <h4 className="test-author">
                                {person.author} - <em>{person.lastname}</em>
                            </h4>
                        </li>
                    </ul>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="center-heading">
                            <h2><strong>What</strong> Client’s Say</h2>
                            <p>2600+ Worldwide customers  use Assan template.</p>
                            <span className="center-line"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="testi-slide">
                            {Client}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}