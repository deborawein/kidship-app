import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import ProfileView from '../../../components/ProfileView'
import PostListItem from '../../../components/PostListItem'
import posts from '../../../assets/data/posts.json'


export default function ProfileScreen() {
  const data = [posts[0], posts[3]]

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style={'dark'} />
      <ProfileView user={posts[0]} />
      <FlatList className='bg-white'
          data={data}
          renderItem={({ item }) => <PostListItem post={item} />}
          contentContainerStyle={{ gap: 5 }}
          showsVerticalScrollIndicator={false}
        />

    </SafeAreaView>
  )
}