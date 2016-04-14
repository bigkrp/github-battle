import React from 'react';
import Results from '../components/Results';

export default class ResultsContainer extends React.Component {
    /* jshint ignore:start */
    static propTypes = {
        name: React.PropTypes.string,
    };
    /* jshint ignore:end */

    constructor(props) {
        super(props);
    }

    render() {
        /* jshint ignore:start */
        return (
            <Results />
        );
        /* jshint ignore:end */
    }
}
