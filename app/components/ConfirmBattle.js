import React from 'react';
import {Link} from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import styles from '../styles';

const PropTypes = React.PropTypes;

function puke( object ) {
    /* jshint ignore:start */
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
    /* jshint ignore:end */
}

function ConfirmBattle ( props ) {
    /* jshint ignore:start */
    return props.isLoading === true
        ? <p> LOADING! </p>
        : <div className="jubmotron col-sm-12 text-center" style={styles.transparentBg}>
            <h1>Confirm Players</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header='Player One'>
                    <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player Two'>
                    <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12" style={styles.space}>
                    <button type="button" className="btn btn-lg btn-success"
                    onClick={props.onInitialeBattle}>
                        Initiate Battle!
                    </button>
                </div>
                <div className="col-sm-12" style={styles.space}>
                    <Link to="/playerOne">
                        <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
                    </Link>
                </div>
            </div>
        </div>
    /* jshint ignore:end */
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitialeBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
};

export default ConfirmBattle;