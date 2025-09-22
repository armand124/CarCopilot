import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import TitleButton from '../components/TitleButton';
import ToggleButtonRow from '../components/ToggleButtonRow';

const LoginScreen = () => {

    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    
    return (
        <View className='bg-white flex-1 justify-center'> 
            <Text className='text-4xl font-semibold self-center'>Log-in</Text>
            <View className='pt-8 w-2/3 self-center'>
                <TitleButton title='Email' placeHolder = 'yourmailadress@example.com' value={email} setValue={setEmail}/>
                <TitleButton title='Password' placeHolder = 'your_super_secret_password@&' value={password} setValue={setPassword} hidden={!showPassword}/>
                <ToggleButtonRow title_off='Hide Password' title_on='Show Password' value={showPassword} setValue={setShowPassword}/>
                <View className='pt-10'>
                    <Button title='Login' color='#fffff' onPress={() => {/*TODO : LOGIC AND API INTEGRATION*/}}/>
                </View>
                <View className='flex-row self-center'>
                    <Text className='self-center pt-6 text-lg'>Do not have an account?</Text>
                    <TouchableOpacity onPress={()=>router.push('/screens/Register')}><Text className='self-center underline pt-6 left-1 text-lg'>Register</Text></TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export default LoginScreen;