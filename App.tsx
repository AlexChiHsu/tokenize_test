import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import {lightColors} from '@rneui/base';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {Platform} from 'react-native';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

const App = () => {
  useEffect(() => {
    console.log('APP STATUS', store.getState().rootReducer);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
