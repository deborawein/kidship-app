import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'


export default function CalendarScreen() {
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style={'dark'} />
      <View>
        <Text>Calendar</Text>
      </View>
    </SafeAreaView>
  )
}