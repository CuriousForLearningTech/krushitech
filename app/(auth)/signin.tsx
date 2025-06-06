import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useRouter } from 'expo-router'
import { images } from '~/constant/images'
import { Formik } from 'formik';
import validationSchema from '~/utils/authSchema'

const Login = () => {
    const router = useRouter();

    interface SignupValues {
        email: string;
        password: string;
    }

    const handleSignup = async (values: SignupValues) => {
        try {
            console.log(values);
            // await AsyncStorage.setItem("userEmail", values.email);
            // await AsyncStorage.setItem("isGuest", "false");
            router.push("/(root)");
        } catch (error) {
            Alert.alert(
                "Signup Error",
                "An unexpected error occurred. Please try again later.",
                [{ text: "OK" }]
            );
        }
    };

    return (
        <SafeAreaView className={`bg-[#2b2b2b]`}>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="m-2 flex justify-center items-center">
                    <Image source={images.logo} style={{ width: 200, height: 100 }} />
                    <Text className="text-lg text-center text-white  font-bold mb-10">
                        Let's get you started
                    </Text>

                    <View className="w-5/6">
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSignup}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }) => (
                                <View className="w-full">
                                    <Text className="text-[#f49b33] mt-4 mb-2">Email</Text>
                                    <TextInput
                                        className="h-10 border border-white text-white rounded px-2"
                                        keyboardType="email-address"
                                        onChangeText={handleChange("email")}
                                        value={values.email}
                                        onBlur={handleBlur("email")}
                                    />

                                    {touched.email && errors.email && (
                                        <Text className="text-red-500 text-xs mb-2">
                                            {errors.email}
                                        </Text>
                                    )}
                                    <Text className="text-[#f49b33] mt-4 mb-2">Password</Text>
                                    <TextInput
                                        className="h-10 border border-white text-white rounded px-2"
                                        secureTextEntry
                                        onChangeText={handleChange("password")}
                                        value={values.password}
                                        onBlur={handleBlur("password")}
                                    />

                                    {touched.password && errors.password && (
                                        <Text className="text-red-500 text-xs mb-2">
                                            {errors.password}
                                        </Text>
                                    )}

                                    <TouchableOpacity
                                        onPress={() => handleSubmit()}
                                        className="p-2 my-2 bg-[#f49b33]  text-black rounded-lg mt-10"
                                    >
                                        <Text className="text-lg font-semibold text-center">
                                            Sign Up
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                        <View className="flex justify-center items-center">
                            <TouchableOpacity
                                className="flex flex-row justify-center mt-5 p-2 items-center"
                                onPress={() => router.push("/signin")}
                            >
                                <Text className="text-white font-semibold">
                                    Already a User?{" "}
                                </Text>
                                <Text className="text-base font-semibold underline text-[#f49b33]">
                                    Sign in
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View className="flex-1">
                    <Image
                        source={images.onboarding1}
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                </View>
                <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login