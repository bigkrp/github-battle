import React from 'react';
const PropTypes = React.PropTypes;

function puke ( obj ) {
    /* jshint ignore:start */
    return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
    /* jshint ignore:end */
}

function Results( props ) {
    /* jshint ignore:start */
    return (
        <div> Results: {puke( props )} </div>
    );
    /* jshint ignore:end */
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};


export default Results;