import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AppRouter from './components/AppRouter';
import './App.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
