import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (

    <SafeAreaView className="bg-primary h-full">
      <StatusBar style={'light'} />
      <ScrollView
        contentContainerStyle={{
          height: "100%"
        }}
      >
        <View className="w-full flex justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logoSmall}
            className="w-[210px] h-[210px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">

            <Text className="text-3xl text-white font-psemibold text-center">
              Stay closer to your{'\n'}
              child’s world with
            </Text>
            <Text className="text-4xl text-secondary-200 font-pregular text-center mt-1">
              KidShip
            </Text>
          </View>
          <CustomButton
            title='Get started'
            handlePress={() => { router.push('/sign-in') }}
            containerStyles="w-full mt-20"
          />

        </View>
      </ScrollView>

    </SafeAreaView >
  )
}