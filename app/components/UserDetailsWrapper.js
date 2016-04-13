import React from 'react';

const PropTypes = React.PropTypes;

function UserDetailsWrapper ( props ) {
    /* jshint ignore:start */
    return (
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>
    );
    /* jshint ignore:end */
}

export default UserDetailsWrapper;