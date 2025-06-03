import { View, Text, Image } from 'react-native'
import React from 'react'
import image from '~/constant/images'

const OnBording = () => {
    return (
        <View>
            <Text>OnBording</Text>
            <Image
                source={image.onbord1}
                className="max-w-[400px] max-h-[400px]"
            />
        </View>
    )
}

export default OnBording