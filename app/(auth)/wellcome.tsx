import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '~/constant/images'
import { router } from 'expo-router'

const OnBording = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white p-4">
            <Image
                source={require('~/constant/images').logo}
                className="w-40 h-40 mb-6"
                resizeMode="contain"
            />
            <Text className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to My Kisan Friend
            </Text>
            <Image
                source={require('~/constant/images').onboarding1}
                className="w-80 h-80 mb-6"
                resizeMode="contain"
            />
            <View className="flex-row space-x-4">
                <TouchableOpacity
                    onPress={() => router.navigate('./signin')}
                    className="bg-blue-500 px-6 py-3 rounded-full"
                >
                    <Text className="text-black font-semibold">Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.navigate('./signup')}
                    className="bg-green-500 px-6 py-3 rounded-full"
                >
                    <Text className="text-black font-semibold">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnBording