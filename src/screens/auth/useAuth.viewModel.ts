import { useAuthStore } from "@/shared/store/auth.store";
import { router } from "expo-router";
import { useState } from "react";

export const useAuthViewModel = () => {
    const [userName, setUserName] = useState<string>("");

    const { setAutenticated } = useAuthStore(); 

    const handleSubmit = () => {
        if (!userName) return; 
        setAutenticated(userName);
        router.replace('/(private)/home')
    }

    return {userName, setUserName, handleSubmit}
}