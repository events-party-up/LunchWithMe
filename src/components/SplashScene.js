
import React from 'react'
import { Navigation, StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

export default class SplashScene extends React.Component {

  render() {
    return (
      <View>
        <Text>Splash Scene</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
