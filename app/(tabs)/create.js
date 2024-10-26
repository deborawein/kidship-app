import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { React, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import * as ImagePicker from 'expo-image-picker';

import CustomButton from '../../components/CustomButton'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CreatePostScreen() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() =>{
    if(!image) pickImage()
  },[image]); 

  return (
    <SafeAreaView className="bg-white h-full">
      
      <StatusBar style={'dark'} />
      <ScrollView className='flex'>

        
        {/* Image picker */}
        <View className="px-4 items-center">
        <TouchableOpacity
          onPress={pickImage}
          >
          {image ? (
          <Image
            source={{ uri: image }}
            className='w-full aspect-[5/4] rounded-lg bg-slate-100'
          />
        ) : ( 
        <View className='w-full aspect-[5/4] rounded-lg bg-slate-100 items-center justify-center'>
        <MaterialIcons name="upload" size={34} color="gray" />
        </View>
        )}

          <Text className='text-secondary-200 font-psemibold m-5 text-center'>Change Image</Text>
          </TouchableOpacity>
          {/* TextInput for caption */}
          <TextInput
            className="h-[92px] font-plight w-full p-3 mb-10 bg-gray-50 rounded-2xl border-[1px] border-gray-200 "
            placeholder="Write a caption..."
            multiline={true}
            value={caption}
            onChangeText={(newValeu) => setCaption(newValeu)}
          />

          {/* Button */}
          <CustomButton
            title="Share"
            containerStyles="mt-auto w-full" />

        </View>
        </ScrollView>

    </SafeAreaView>

  )
}