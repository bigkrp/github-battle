import React from 'react';
import Prompt from '../components/Prompt';

// console.log('transparentBg: ', transparentBg);
let PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState(){
        return {
            username: '',
        };
    },
    handleUpdateUser(e){
        this.setState({
            username: e.target.value
        });
    },
    handleSubmitUser(e){
        e.preventDefault();
        let username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
        } else {
            this.context.router.push('/playerTwo/' + this.state.username);
        }
    },
    render(){
        return (
            <Prompt 
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        );
    }
});

module.exports = PromptContainer;