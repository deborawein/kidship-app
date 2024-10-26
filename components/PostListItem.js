import { View, Text, Image } from 'react-native'
import { React, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function PostListItem({ post }) {
    const [countLike, setCountLike] = useState(!(post.likes) ? 0 : (post.likes))
    const [isLiked, setIsLiked] = useState(false)
    const addLike = () => {
        if (isLiked === false) {
            setCountLike(countLike + 1)
        } else {
            setCountLike(countLike - 1)
        }
    }
    return (
        <View className='bg-white'>
            <View className='mb-3'>
                <View className='flex-row items-center p-3 gap-3'>
                    <Image source={{ uri: post.user.image_url }} className='w-12 aspect-square object-cover rounded-full border-2 border-secondary-100' />
                    <Text className='text-base font-pmedium'>{post.user.username}</Text>
                </View>
                <View className='items-center'>
                    <Image source={{ uri: post.image_url }} className='object-scale-down w-full aspect-[5/4]' />
                </View>
                <View className='flex-row items-center justify-between p-3' >
                    <View className='flex-row items-center justify-between' >
                        <TouchableOpacity onPress={() => {
                            setIsLiked(!isLiked)
                            addLike()
                        }} >
                            <MaterialCommunityIcons
                                name={!isLiked ? "cards-heart-outline" : "cards-heart"}
                                size={26}
                                color={!isLiked ? "#f5b22d" : "#ef4444"}
                            />
                        </TouchableOpacity>
                        <Text className='pl-2 font-pregular'>{countLike} likes</Text>
                    </View>
                        <MaterialCommunityIcons name="comment-outline" size={26} color="#f5b22d" />
                </View>
                <View className='px-3'>
                    <Text className='text-sm text-justify font-plight'>{post.caption}</Text>
                </View>

                <View className='px-3 py-2'>
                    <Text className='text-xs font-plight text-gray-500'>6 hours ago</Text>
                </View>
            </View>
        </View>
    )
}