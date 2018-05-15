import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Betslip from './Betslip';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Betslip />, document.getElementById('root'));
registerServiceWorker();
