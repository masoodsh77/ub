import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { getFirstData } from './action';
import Home from './Components/Home/Home';
import TPForm from './Components/TPForm/TPForm'
import Comparison from './Components/Comparison/Comparison';

class App extends Component {
    componentDidMount() {
        // get all first data
        axios.post('http://37.152.182.101:8002/ubim/request/v1', {
            "payload": {
            },
            "group": "service",
            "key": "all",
            "src": "third"
        })
            .then(response => this.props.getFirstAidKit(response.data))
            .catch(err => {
                console.log('Error in reducers/third.js line 15');
                console.log(err);
            });
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/tpform' component={TPForm} />
                    <Route exact path='/comparison' component={Comparison} />
                </Router>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    getFirstAidKit: allData => dispatch(getFirstData(allData))
})
export default connect(null, mapDispatchToProps)(App);
