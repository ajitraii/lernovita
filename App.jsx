

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


const App = () => {

  return (
    <View>
      {/* <StatusBar barStyle={'dark-content'} /> */}
      {/* <Text>App</Text> */}
      {/* <Components />
      <Login /> */}

      {/* <UseCallbackHook /> */}
      {/* <UseMemoHook /> */}

      <UseContextHook />
    </View>
  )
}

export default App;
