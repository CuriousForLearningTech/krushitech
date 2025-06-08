import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <SafeAreaView className='flex-1 bg-background-light'>
            <Stack>
                <Stack.Screen name='wellcome' options={{ headerShown: false }} />
                <Stack.Screen name='signup' options={{ headerShown: false }} />
                <Stack.Screen name='signin' options={{ headerShown: false }} />
            </Stack>
        </SafeAreaView>
    )
}

export default AuthLayout