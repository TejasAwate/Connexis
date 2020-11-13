import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Users from './components/Users';
import './App.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};

export default App;
