import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Slot/>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}


export default _layout