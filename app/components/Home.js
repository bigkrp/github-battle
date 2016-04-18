import React from 'react';
import {Router, Link} from 'react-router';
import MainContainer from './MainContainer';

const Home = React.createClass({
    render(){
        /* jshint ignore:start */
        return(
            <MainContainer>
                <h1>Github battle</h1>
                <p className='lead'>Some fancy motto</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>Get Started</button>
                </Link>
            </MainContainer>
        );
        /* jshint ignore:end */
    }
});

module.exports = Home;