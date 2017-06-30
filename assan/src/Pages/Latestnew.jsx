import React from 'react';

export default class Latestnew extends React.Component {
    constructor(){
        super()
        this.state={
            news:[]
        }
    }
    componentWillMount(){
        this.state.news=[
            {
                image:'item9.jpg',
                category:'Sports',
                tittle:'Lorem ipsum dollor Sit amet',
                author:'Author',
                date:' on 24 july 2014',
                read:'Read more...'

            },
             {
                image:'item4.jpg',
                category:'Sports',
                tittle:'Lorem ipsum dollor Sit amet',
                author:'Author',
                date:' on 24 july 2014',
                read:'Read more...'

            },
             {
                image:'item3.jpg',
                category:'Sports',
                tittle:'Lorem ipsum dollor Sit amet',
                author:'Author',
                date:' on 24 july 2014',
                read:'Read more...'

            }
        ]
    }
    render() {
        var news = this.state.news.map(latenews=>{
            return(
                     <div className="col-sm-4 margin30">
                            <div>
                                <a href="#">
                                    <div className="item-img-wrap">
                                        <img src={latenews.image} className="img-responsive" alt="workimg"/>
                                            <div className="item-img-overlay">
                                            </div>
                                        </div>                       
                                    </a>
                                    <div className="news-desc">
                                        <span>{latenews.category}</span>
                                        <h4><a href="#">{latenews.tittle}</a></h4>
                                        <span>By <a href="#">{latenews.author}</a>{latenews.date}</span> <span><a href="#">{latenews.read}</a></span>
                                        </div>
                                     </div> 
                            </div>
            )
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="center-heading">
                                <h2><strong>latest</strong> news</h2>
                                <span className="center-line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       {news}

                        </div>
                    </div>
                </div>
                )
    }
}