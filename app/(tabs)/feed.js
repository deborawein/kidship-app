import { View, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

import PostListItem from '../../components/PostListItem'
import PostListHeader from '../../components/PostListHeader';

import posts from '../../assets/data/posts.json'


export default function FeedScreen() {
  const insets = useSafeAreaInsets()
  return (
    <View className="bg-white" style={{paddingTop: insets.top}}>
          <StatusBar style={'dark'} />
        <FlatList className='bg-white'
          data={posts}
          renderItem={({ item }) => <PostListItem post={item} />}
          contentContainerStyle={{ gap: 5 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <PostListHeader />}
        />

    </View>
  )
}