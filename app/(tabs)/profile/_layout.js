import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, headerTitle: "Profile"}} />
      <Stack.Screen name="profile-edit" options={{ headerShown: false, headerTitle: "Edit Profile" }} />
      <Stack.Screen name="settings-modal" options={{ headerShown: false, headerTitle: "Settings", presentation: 'modal' }} />
    </Stack>
  )
}