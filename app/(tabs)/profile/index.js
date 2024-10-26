import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import ProfileView from '../../../components/ProfileView'
import posts from '../../../assets/data/posts.json'

const user = posts[0]

export default function ProfileScreen() {
  console.log(user.id)
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style={'dark'} />
      <ProfileView user={user} />
    </SafeAreaView>
  )
}