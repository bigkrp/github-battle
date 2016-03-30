import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';

// let React = require('react');
// let ReactDOM = require('react-dom');
// let routes = require('./config/routes');

render(
    routes,
    document.getElementById('app')
);