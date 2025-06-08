import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image, Alert, TextInput } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { images } from '~/constant/images'
import { Formik } from 'formik'
import validationSchema from '~/utils/authSchema'

const Register = () => {
    interface SignupValues {
        email: string;
        password: string;
    }

    const handleSignin = async (values: SignupValues) => {
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
        <SafeAreaView className={`bg-background-light`}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="flex justify-center items-center h-1/3">
                    <Image
                        source={images.secodlogo}
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                </View>
                <View className="flex justify-center items-center">
                    <Text className="text-lg text-center text-primary  font-bold mb-10">
                        Let's get you started
                    </Text>

                    <View className="w-5/6">
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSignin}
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
                                    <Text className="text-primary mt-4 mb-2">Email</Text>
                                    <TextInput
                                        className="h-10 border border-primary-light text-primary-light rounded px-2"
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
                                    <Text className="text-primary-light mt-4 mb-2">Password</Text>
                                    <TextInput
                                        className="h-10 border border-primary-light text-black rounded px-2"
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
                                        className="p-2 my-2 bg-primary  text-black rounded-lg mt-10"
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
                                <Text className="text-primary-light font-semibold">
                                    Already a User?{" "}
                                </Text>
                                <Text className="text-base font-bold underline text-primary">
                                    Sign in
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="mt-5">
                            <TouchableOpacity
                                className="p-2 my-2 bg-blue-600 bg-secondary rounded-lg"
                                onPress={() => Alert.alert("Google Sign-In", "Sign in with Google")}
                            >
                                <Text className="text-lg font-semibold text-center text-black">
                                    Sign in with Google
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className="p-2 my-2 bg-blue-800 bg-secondary rounded-lg"
                                onPress={() => Alert.alert("Facebook Sign-In", "Sign in with Facebook")}
                            >
                                <Text className="text-lg font-semibold text-center text-black">
                                    Sign in with Facebook
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Register