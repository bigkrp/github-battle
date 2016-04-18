import React from 'react';
import styles from '../styles';

function MainContainer ( props ) {
    return (
        /* jshint ignore:start */
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            {props.children}
        </div>
        /* jshint ignore:end */
    );
}

export default MainContainer;