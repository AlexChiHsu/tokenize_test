import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import LoginScreen from './src/screen/login';

const App = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};

export default App;
