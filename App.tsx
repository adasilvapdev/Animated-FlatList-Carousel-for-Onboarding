import React from 'react';
import RootNavigation from './app/navigation/RootNavigation'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {

  return (
    <RootNavigation />
  )
}

export default App