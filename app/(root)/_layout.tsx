import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="confirm-buy"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}

export default RootLayout