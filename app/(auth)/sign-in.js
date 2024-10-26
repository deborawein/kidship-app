import { View, Text, ScrollView, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { router, Link } from 'expo-router'

import { images } from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'




const SignIn = () => {

  const [form, setForm] = useState({ email: '', password: '' });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => { }
  return (

    <SafeAreaView className="bg-primary h-full">
      <StatusBar style={'light'} />
      <ScrollView>

        <View className="w-full flex justify-center min-h-[85vh] px-4 my-6">

          <Image source={images.logoLong} resizeMode='contain' className="w-[220px] h-[87px]" />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Log in to KindShip
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={() => { router.push('/feed') }}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'> Sign Up</Link>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn