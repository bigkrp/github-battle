import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

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
    componentDidMount() {
        const query = this.props.location.query;
        
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function (players) {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                });
            }.bind(this));
    }
    constructor(props) {
        super(props);

        this.handleInitialBattle = function () {
            console.log('this: ', this);
            this.context.router.push({
                pathname: '/results',
                state: {
                    playersInfo: this.state.playersInfo
                }
            });
        }.bind(this);
    }
    // handleInitialBattle() {
    //     console.log('this: ', this);
    //     this.context.router.push({
    //         pathname: '/results',
    //         state: {
    //             playersInfo: this.state.playersInfo
    //         }
    //     });
    // }
    render() {
        return (
            /* jshint ignore:start */
            <ConfirmBattle
            isLoading={this.state.isLoading}
            onInitialeBattle={this.handleInitialBattle}
            playersInfo={this.state.playersInfo} />
            /* jshint ignore:end */
        );
    }
}
// import React from 'react';

// export default class ConfirmBattleContainer extends React.Component {
//   static propTypes = {
//     name: React.PropTypes.string,
//   };

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div></div>
//     );
//   }
// }
