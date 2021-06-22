import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { OnBoardingScreen } from '../../../screens/onboarding'

const OnBoardingNavigation: React.FC = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="OnBoardingScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="OnBoardingScreen"
                component={OnBoardingScreen}
            />
        </Stack.Navigator>
    )
}

export default OnBoardingNavigation