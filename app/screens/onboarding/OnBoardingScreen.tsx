import React, { useState, useRef } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Animated from 'react-native-reanimated'
import { OnboardingItem } from '../../components/organisms'
import { SLIDES } from '../../utils'

const OnBoardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const slidesRef = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].items)
  }).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={SLIDES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{ naviteEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
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
