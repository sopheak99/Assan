import React from 'react';

export default class Clientservice extends React.Component {
    constructor() {
        super()
        this.state = {
            Clientservice: []
        }
    }
    componentWillMount() {
        this.state.Clientservice = [
            {
                icon: 'pe-7s-diamond',
                tittle: '250+ valid layouts',
                decription: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.'
            },
            {
                icon: 'pe-7s-download',
                tittle: 'Free Support &amp; Updates',
                decription: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.'
            }
        ]
    }
    render() {
        var Clientservice = this.state.Clientservice.map(service => {
            return (
                <div>
                    <div className="col-sm-6 margin30">
                        <div className="services-box wow animated fadeInDown animated">
                            <div className="services-box-icon">
                                <i className={service.icon}></i>
                            </div>
                            <div className="services-box-info">
                                <h4>{service.tittle}</h4>
                                <p>
                                    {service.decription}
                                </p></div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="blue-bg">
                    <div className="container">
                        <div className="row">
                            {Clientservice}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}