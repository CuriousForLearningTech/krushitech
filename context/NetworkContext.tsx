// src/context/NetworkContext.tsx
import React, { createContext, useEffect, useState, useContext } from 'react';
import NetInfo from '@react-native-community/netinfo';

const NetworkContext = createContext<{ isConnected: boolean }>({ isConnected: true });

export const NetworkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected ?? false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <NetworkContext.Provider value={{ isConnected }}>
            {children}
        </NetworkContext.Provider>
    );
};

export const useNetwork = () => useContext(NetworkContext);
