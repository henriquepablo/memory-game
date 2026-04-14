import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'


interface AuthStore {
    user: {
        id: string,
        name: string,
        createdAt: Date
    } | null;
    setAutenticated: (name: string) => void;
    logout: () => void;

}

export const useAuthStore = create<AuthStore>()(
    persist((set) => ({
        user: null,
        logout: () => {
            set({ user: null})
        },
        setAutenticated: (name) => { 
            set({
                user: {
                    name,
                    id: `user-${Date.now()}`,
                    createdAt: new Date()
                }
            })
        }
    }),
    {
        name: '@memory-game:auth',
        storage: createJSONStorage(() => AsyncStorage)
    }
    )
);