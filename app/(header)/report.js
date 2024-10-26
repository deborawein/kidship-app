import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Report() {
  return (
    <SafeAreaView>
    <View className='w-full h-full bg-white'>
      <View className='flex-row items-center justify-between p-4'>
       <TouchableOpacity onPress={() => router.back()}>
       <AntDesign name="leftcircle" size={24} color="black" />
       </TouchableOpacity>
       <Text>Report</Text>
       <View></View>

      </View>

    </View>
    </SafeAreaView>
  )
}