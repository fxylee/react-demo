import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

ReactDOM.render(
    <App />,
    document.querySelector('App')
);

console.log('App has render');

if(module.hot) {
    module.hot.accept('./App.jsx', (...args) => {
        ReactDOM.render(
            <App />,
            document.querySelector('App')
        );

        console.log('App has update %o', args);
    });
}