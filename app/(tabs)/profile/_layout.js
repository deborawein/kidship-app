import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, headerTitle: "Profile"}} />
      <Stack.Screen name="profile-edit" options={{ headerShown: true, headerTitle: "Edit Profile" }} />
    </Stack>
  )
}