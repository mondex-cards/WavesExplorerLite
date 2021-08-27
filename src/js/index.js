import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import '../styles/main.scss';

import Fallback from './Fallback';
import Adv from './Adv';
const delay = (t, v) => {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
};

const AsyncApp = React.lazy(() => delay(250).then(() => import(/* webpackChunkName: "app" */'./App')));

const Main = () => {
    return (
        <React.Suspense fallback={<Fallback />}>
            <AsyncApp />
        </React.Suspense>
    );
};

Modal.setAppElement('#root');
ReactDOM.render(<Main />, document.getElementById('root'));

const hostname = window.location.hostname;

if(hostname !== 'explorer.clbwallet.com'){
    ReactDOM.render(<Adv/>, document.getElementById('adv-root'));
} else {
    const advRootWrapperEls = document.getElementById('adv-wrapper');
    advRootWrapperEls.remove();
}

if (module.hot) {
    module.hot.accept('./App', function() {
        console.log('Reloading App!');
    });
}
