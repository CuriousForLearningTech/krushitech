import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { images } from '~/constant/images'
import InputField from '~/components/Input'

const profile = () => {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView
                className="px-5"
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <Text className="text-2xl font-JakartaBold my-5">My profile</Text>

                <View className="flex items-center justify-center my-5">
                    <Image
                        source={images.logo}
                        style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                        className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
                    />
                </View>

                <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
                    <View className="flex flex-col items-start justify-start w-full">
                        <InputField
                            label="First name"
                            placeholder={"Not Found"}
                            containerStyle="w-full"
                            inputStyle="p-3.5"
                            editable={false}
                        />

                        <InputField
                            label="Last name"
                            placeholder={"Not Found"}
                            containerStyle="w-full"
                            inputStyle="p-3.5"
                            editable={false}
                        />

                        <InputField
                            label="Email"
                            placeholder={
                                "Not Found"
                            }
                            containerStyle="w-full"
                            inputStyle="p-3.5"
                            editable={false}
                        />

                        <InputField
                            label="Phone"
                            placeholder={"Not Found"}
                            containerStyle="w-full"
                            inputStyle="p-3.5"
                            editable={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default profile