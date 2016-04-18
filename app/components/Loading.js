import React from 'react';

const styles= {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        fontSize: '55px'
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '38px'
    }
};

export default class Loading extends React.Component {
    /* jshint ignore:start */
    static propTypes = {
        text: React.PropTypes.string,
        speed: React.PropTypes.number,
    };
    defaultProps = {
        text: 'Loading',
        speed: 300
    };
    originalText = this.props.text;
    state = {
        text: this.originalText
    };
    /* jshint ignore:end */
    componentDidMount() {
        let stopper = this.props.text + '...';
        this.interval = setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.props.text
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }
        }, this.props.speed);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        /* jshint ignore:start */
        return (
            <div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
        );
        /* jshint ignore:end */
    }
}
