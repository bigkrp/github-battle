import React from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

export default class ResultsContainer extends React.Component {
    /* jshint ignore:start */
    static propTypes = {
        name: React.PropTypes.string,
    };
    state = {
        isLoading: true,
        scores: []
    };
    /* jshint ignore:end */

    componentDidMount() {
        console.log('this.props', this.props.location.state.playersInfo);
        githubHelpers.battle(this.props.location.this.state.playersInfo)
            .then(function ( scores ) {
                this.setState({
                    scores: scores,
                    isLoading: false
                });
            }.bind(this));
    }

    render() {
        /* jshint ignore:start */
        return (
            <Results
                isLoading={this.state.isLoading} 
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores} />
        );
        /* jshint ignore:end */
    }
}
