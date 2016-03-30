import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

export default class ConfirmBattleContainer extends React.Component {
    /* jshint ignore:start */
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };
    state = {
        isLoading: true,
        playersInfo: []
    };
    /* jshint ignore:end */
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        const query = this.props.location.query;
        console.log('componentDidMount');
        // Fetch info from github then update state
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            /* jshint ignore:start */
            <ConfirmBattle isLoading={this.state.isLoading}
            playersInfo={this.state.playersInfo} />
            /* jshint ignore:end */
        );
    }
}