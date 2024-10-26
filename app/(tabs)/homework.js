import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function HomeworkScreen() {
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style={'dark'} />
      <View>
        <Text>Homework</Text>
      </View>
    </SafeAreaView>
  )
}