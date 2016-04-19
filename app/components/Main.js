import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../main.css';

const Main = React.createClass({
    render(){
        /* jshint ignore:start */
        return (
            <div className='main-container'>
                <ReactCSSTransitionGroup
                    transitionName='appear'
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        );
        /* jshint ignore:end */
    }
});

module.exports = Main;