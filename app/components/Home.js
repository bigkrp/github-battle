import React from 'react';
import {transparentBg} from '../styles';
import {Router, Link} from 'react-router';

const Home = React.createClass({
    render(){
        return(
            <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
                <h1>Github battle</h1>
                <p className='lead'>Some fancy motto</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>Get Started</button>
                </Link>
            </div>
        );
    }
});

module.exports = Home;