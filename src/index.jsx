import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

const defaultState = {
  appName: 'Apollo',
};

const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE': {
      return {
        ...state,
        checked: !state.checked,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextComponent = require('./components/App').default; // eslint-disable-line global-require
    render(NextComponent);
  });
}
