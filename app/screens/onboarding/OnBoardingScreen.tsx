import React from 'react'
import { StyleSheet, Text, Image, View, FlatList, useWindowDimensions } from 'react-native'
import { OnboardingItem } from '../../components/organisms'
import { SLIDES } from '../../utils'

const OnBoardingScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <FlatList
        data={SLIDES}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
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
