import React from 'react'
import { Stack } from 'expo-router'

export default function HeaderLayout() {
  return (
    <Stack>
      <Stack.Screen name="report" options={{ headerShown: false }} />
      <Stack.Screen name="message" options={{ headerShown: false }} />
    </Stack>
  )
}