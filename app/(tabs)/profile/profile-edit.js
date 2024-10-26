import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

import posts from '../../../assets/data/posts.json'


export default function ProfileEditScreen() {
  const user = posts[0]

  console.log[user.user.image_url]

  return (
    <SafeAreaView>
      <View className='w-full h-full bg-white'>
        <View className='flex-row items-center justify-between p-4'>
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="closecircle" size={26} color="black" />
          </TouchableOpacity>
          <Text className='font-psemibold text-xl'>Edit Profile</Text>
          <TouchableOpacity>
            <AntDesign name="checkcircle" size={26} color="green" />
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center justify-around py-5'>
          <View className='items-center'>
            <Image source={{ uri: user.user.image_url }} className='w-[80] aspect-square object-cover rounded-full border-2 border-secondary-100' />
            <Text className='pt-2 font-psemibold text-center text-sm text-secondary-100'>Change profile photo</Text>
          </View>
        </View>
        <View className='flex-col gap-4 px-4'>
          <View className='gap-2'>
            <Text className='text-gray-200 text-sm font-pregular'>Name</Text>
            <TextInput className='text-md font-pregular border-b-[1px] border-gray-200'
              placeholder='name'
              defaultValue={user.user.name}
            />
          </View>
        </View>
        <View className='flex-col gap-4 px-4 py-2'>
          <View className='gap-2'>
            <Text className='text-gray-200 text-sm font-pregular'>Name</Text>
            <TextInput className='text-md font-pregular border-b-[1px] border-gray-200'
              placeholder='Username'
              defaultValue={user.user.username}
            />
          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}