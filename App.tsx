import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import LoginScreen from './src/screen/login';
import { store } from './src/store/store';

const App = () => {
  return (
   <Provider store={store}>
    <LoginScreen />
   </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
