import React from 'react';
// let React = require('react');

let Main = React.createClass({
    render(){
        return(
            <div className='main-container'>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;