import React from 'react';

export default class Awesome extends React.Component {
    constructor() {
        super()
        this.state = {
            Awesome: []
        }
    }
    componentWillMount() {
        this.state.Awesome = [
            {
                icon: 'fa fa-image',
                tittle: 'Sliders',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'

            },
            {
                icon: 'fa fa-envelope',
                tittle: 'Advanced Forms',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'

            },
            {
                icon: 'fa fa-users',
                tittle: 'Customer Support',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'

            },
            {
                icon: 'fa fa-crop',
                tittle: 'Pixel perfect design',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'

            },
            {
                icon: 'fa fa-twitter',
                tittle: 'BOOTSTRAP 3.3.6',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'

            },
             {
                icon: 'fa fa-flag',
                tittle: 'Font Awesome icons',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.'

            }
        ]
    }
    render() {
        var Awesome = this.state.Awesome.map(awse => {
            return (
                <div className="col-md-4 col-sm-6">
                    <div className="boxicon">
                        <i className={awse.icon}></i>
                    </div>

                    <div className="services-box-info">
                        <h4>{awse.tittle}</h4>
                        <p>
                            {awse.description}
                        </p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="center-heading">
                            <h2>Awesome <strong>features</strong></h2>
                            <span className="center-line"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="services-box wow animated fadeIn animated">
                        {Awesome}
                        </div>
                    </div>
                </div>
            
        )
    }
}