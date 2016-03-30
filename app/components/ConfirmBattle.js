import React from 'react';

function ConfirmBattle ( props ) {
    /* jshint ignore:start */
    return props.isLoading === true
        ? <p> LOADING! </p>
        : <p> CONFIRM BATTLE! </p>
    /* jshint ignore:end */

}

export default ConfirmBattle;