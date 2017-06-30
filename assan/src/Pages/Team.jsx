import React from 'react';
import { Row, Col } from 'react-bootstrap';
export default class Team extends React.Component {
    constructor() {
        super()
        this.state = {
            Team: []
        }
    }
    componentWillMoun() {
        this.state.Team = [
            {
                image: 'team1.jpg',
                name: 'Steve Smith',
                position: 'Creative Designer'
            }
        ]
    }
    render() {
        var Team = this.state.Team.map(team => {
            return (
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <div className="person-v2">
                            <img src={team.image} className="img-responsive" alt="" />
                            <div className="person-desc-v2">
                                <h3>{team.name}</h3>
                                <em>{team.position}</em>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="center-heading">
                            <h2>Assan <strong>Team</strong></h2>
                            <span className="center-line"></span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3 text-center">
                        <div className="person-v2">
                            <img src="team1.jpg" className="img-responsive" alt="" />
                            <div className="person-desc-v2">
                                <h3>Steve Smith</h3>
                                <em>Creative Designer</em>
                                <ul className="list-inline top-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 text-center">
                        <div className="person-v2">
                            <img src="team2.jpg" className="img-responsive" alt="" />
                            <div className="person-desc-v2">
                                <h3>Steve Smith</h3>
                                <em>Creative Designer</em>
                                <ul className="list-inline top-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 text-center">
                        <div className="person-v2">
                            <img src="team3.jpg" className="img-responsive" alt="" />
                            <div className="person-desc-v2">
                                <h3>Steve Smith</h3>
                                <em>Creative Designer</em>
                                <ul className="list-inline top-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 text-center">
                        <div className="person-v2">
                            <img src="team4.jpg" className="img-responsive" alt="" />
                            <div className="person-desc-v2">
                                <h3>Steve Smith</h3>
                                <em>Creative Designer</em>
                                <ul className="list-inline top-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}