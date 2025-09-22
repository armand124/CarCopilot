import { useRouter } from 'expo-router';
import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../../global.css";
import Hero from '../imgs/welcome_img.svg';
const WelcomeScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className='bg-white'>
            <ScrollView className='bg-white'>
                <Text className='self-center color-black pt-24 text-3xl font-semibold'>
                    Welcome to Car Copilot!
                </Text>
                <View className='self-center'>
                    <Hero width={300} height={300}/>
                </View>
                <Text className='self-center color-black pt-6 px-6 text-center text-lg font-normal'>The app that makes driving easier and safer!*</Text>
                <Button 
                    title='Get Started' 
                    color='#fffff'
                    onPress={() => { router.push("/screens/AuthOptions")}}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WelcomeScreen;