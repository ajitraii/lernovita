

import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native'; //Core Components
import Components, { Height, Login } from './src/Pages/Components/Components';
import UseCallbackHook from './src/Pages/useCallbackHook/UseCallbackHook';
import UseMemoHook from './src/Pages/useMemoHook/UseMemoHook';
import UseContextHook from './src/Pages/useContextHook/UseContextHook';
import AppNavigator from './src/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistedStore, Store } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {

  return <NavigationContainer>
    <Provider store={Store}>
      <PersistGate persistor={persistedStore}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  </NavigationContainer>
  // <View>

  {/* <StatusBar barStyle={'dark-content'} /> */ }
  {/* <Text>App</Text> */ }
  {/* <Components />
      <Login /> */}

  {/* <UseCallbackHook /> */ }
  {/* <UseMemoHook /> */ }

  {/* <UseContextHook /> */ }




  {/* </View> */ }

}

export default App;
