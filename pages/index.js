import React from 'react';
//import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

import App from './App'

if (typeof window !== 'undefined') { require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.css'); }

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <App/>
            </div>
        )
    }
}

