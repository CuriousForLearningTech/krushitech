// src/components/NoInternetModal.tsx
import React from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';


interface Props {
    visible: boolean;
}


const NoInternetModal: React.FC<Props> = ({ visible }) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View className="flex-1 bg-black/70 justify-center items-center px-4">
                <Text className="text-white text-2xl font-bold mb-2">No Internet Connection</Text>
                <Text className="text-white text-base mb-5 text-center">Please check your connection</Text>
                <ActivityIndicator size="large" color="white" />
            </View>
        </Modal>
    );
};

export default NoInternetModal;
