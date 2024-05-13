/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/components/AppContainer';
import MainScreen from './src/screens/MainScreen';
import store from './src/store';

function App(): React.JSX.Element {
  // const theme = useColorScheme();
  return (
    <Provider store={store}>

      <AppContainer>
        <MainScreen />
      </AppContainer>
    </Provider>
  );
}

export default App;
