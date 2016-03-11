var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function () {
        return(
            <div> Hello Reactjs Programm </div>
        )
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);