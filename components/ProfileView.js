import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { router, Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function ProfileView({ user }) {
    return (

        <>
            <View className='flex-row items-center justify-between px-3'>
            <Link href="/(tabs)/profile/settings-modal">
            <Ionicons name="settings" size={26} color="black" />
            </Link>
                <View className='flex-row items-center'>
                    <Text className='font-pbold text-2xl'>{user.user.username}</Text>
                </View>
                <Ionicons name="log-out-outline" size={26} color="black" className='px-3' />

            </View>
            <View className='flex-row items-center justify-around py-5'>
                <View className='items-center'>
                    <Image source={{ uri: user.user.image_url }} className='w-[80] aspect-square object-cover rounded-full border-2 border-secondary-100' />
                    <Text className='pt-2 font-psemibold text-center text-sm'>{user.user.name}</Text>
                </View>
            </View>
            <View className='w-full flex-row items-center justify-evenly px-5'>
                <TouchableOpacity className='w-full' onPress={() => {
                    router.push('../(tabs)/profile/profile-edit')
                }}>
                    <View className='w-full h-[35] rounded-md border-gray-100 border-[1px] justify-center items-center'>
                        <Text className='font-psemibold text-md tracking-widest opacity-80'>Edit Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>

      </>

    )
}