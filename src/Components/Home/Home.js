import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu'
import Slide from './Slide/Slide';
import Feture from './Feture/Feture';

class Home extends Component {
    render() {
        return (
            <div>
                <TopMenu/>
                <Slide/>
                <Feture/>
            </div>
        );
    }
}

export default Home;