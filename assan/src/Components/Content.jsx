import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Slideshow from '../Pages/Slideshow';
import Whatwe from '../Pages/Whatwe';
import Alllist from '../Pages/Alllist';
import Service from '../Pages/Service';
import Client from '../Pages/Client';
import Clientservice from '../Pages/Clientservice';
import Awesome from '../Pages/Awesome';
import Team from '../Pages/Team';
import Latestnew from '../Pages/Latestnew';
import Creative from '../Pages/Creative';
export default class Content extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Slideshow />
                <Whatwe />
                <Alllist />
                <Service/>
                <Client/>
                <Clientservice/>
                <Awesome/>
                <Team/>
                <Latestnew/>
                <Creative/>
            </div>
        )
    }
}