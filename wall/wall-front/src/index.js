import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-rtl/dist/css/bootstrap-rtl.css'
import '../styles/base_styles.css';
import './utils/css/main.css';
import './utils/css/util.css';

ReactDOM.render(<Router routes={routes} history={browserHistory}/>,
    document.getElementById('root'));
