import React from 'react';
import ReactDOM from 'react-dom';

var App = require('./components/App');


//take this component's generated HTML and put it on the page
ReactDOM.render(<App / >, document.getElementById('div1'));