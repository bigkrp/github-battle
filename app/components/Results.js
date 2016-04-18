import React from 'react';
import styles from '../styles';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import {Link} from 'react-router';
import Loading from './Loading';

const PropTypes = React.PropTypes;

function StartOver () {
    /* jshint ignore:start */
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to='playerOne'>
                <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    );
    /* jshint ignore:end */
}

function Results( props ) {
    if (props.isLoading === true) {
        /* jshint ignore:start */
        return (
            <Loading text='One Moment' />
        );
        /* jshint ignore:end */
    }

    if (props.scores[0] === props.scores[1]) {
        /* jshint ignore:start */
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainContainer>
        );
        /* jshint ignore:end */
    }

    let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1,
    loserIndex       = winningIndex === 0 ? 1 : 0;
    /* jshint ignore:start */
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails scores={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails scores={props.scores[loserIndex]} info={props.playersInfo[loserIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    );
    /* jshint ignore:end */
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};


export default Results;