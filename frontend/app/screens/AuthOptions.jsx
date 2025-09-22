import { useRouter } from "expo-router";
import { Button, ScrollView, Text } from "react-native";
const AuthOptionsScreen = () => {
    const router = useRouter();

    return (
        <ScrollView className="bg-white"> 
            <Text className="self-center color-black pt-72 pb-4 text-3xl font-semibold">Get started with Copilot!</Text>
            <Button title="Login" color='#fffff' onPress={() => {router.push('/screens/Login')}}/>
            <Button title="Register" color='#fffff' onPress={() => {'/screens/Register'}}/>
        </ScrollView>
    )
}
export default AuthOptionsScreen;