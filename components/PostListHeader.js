import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { router, Link } from 'expo-router'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { images } from '../constants'


export default function PostListHeader() {
  return (
    <View className="flex flex-row bg-white ">
      <View className="w-[70vw] flex-row items-end justify-start gap-3 p-3">
        <Image source={images.logoSmall} resizeMode='contain' className="w-[51px] h-[43px]" />
        <Text className="text-4xl text-primary font-pregular text-center" >KidShip</Text>
        </View>
        <View className="w-[30vw] flex-row items-center justify-end gap-6 p-3">
        <Link href='report'>
          <MaterialCommunityIcons name="medal" size={26} color="#f5b22d" />
        </Link>
        <Link href='message'>
          <MaterialCommunityIcons name="message-processing" size={26} color="#f5b22d" />
        </Link>

      </View>
    </View>
  )
}