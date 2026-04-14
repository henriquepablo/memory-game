import { useAuthStore } from "@/shared/store/auth.store";
import { Redirect } from "expo-router";

export default function Index() {

    const { user } = useAuthStore();

    if (user) {
        <Redirect href='/(private)/home' />
        
    }

    return (
        <Redirect href='/(public)/login'/>
    )
}