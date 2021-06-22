import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { OnBoardingNavigation } from './sections/onboarding'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: 'red' }
        }}>
        <Stack.Screen
          name="OnBoardingNavigation"
          component={OnBoardingNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation
