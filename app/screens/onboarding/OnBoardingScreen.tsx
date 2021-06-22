import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const OnBoardingScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text>onboarding screen</Text>
    </View>
  )
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})
