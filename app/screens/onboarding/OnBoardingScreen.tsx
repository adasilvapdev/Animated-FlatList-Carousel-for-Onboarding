import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>onboarding screen</Text>

      <Button
        title="Registrate"
        color="#f194ff"
        onPress={() => navigation.navigate('AuthMethodSelectorNavigation')}
      />
      <Button
        title="Registrate"
        color="#f194ff"
        onPress={() => navigation.navigate('SignUpNavigation')}
      />

      <Button
        title="Icons"
        color="#f194ff"
        onPress={() => navigation.navigate('IconsScreen')}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
  },
});
