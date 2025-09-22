import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import TitleButton from '../components/TitleButton';
import ToggleButtonRow from '../components/ToggleButtonRow';

const RegisterScreen = () => {

    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    return (
        <View className='bg-white flex-1 justify-center'> 
                <Text className='text-4xl font-semibold self-center'>Register</Text>
                <View className='pt-8 w-2/3 self-center'>
                    <View className='flex-row flex-grow-0 justify-between'>
                        <View className='flex-1'>
                            <TitleButton title='First Name' placeHolder = 'John' value={firstName} setValue={setFirstName}/>
                        </View>
                        <View className='flex-1'>
                            <TitleButton title='Last Name' placeHolder = 'Pork' value={lastName} setValue={setLastName}/>
                        </View>
                    </View>
                    <TitleButton title='Email' placeHolder = 'yourmailadress@example.com' value={email} setValue={setEmail}/>
                    <TitleButton title='Password' placeHolder = 'your_super_secret_password@&' value={password} setValue={setPassword} hidden={!showPassword}/>
                    <ToggleButtonRow title_off='Hide Password' title_on='Show Password' value={showPassword} setValue={setShowPassword}/>
                    <View className='pt-10'>
                        <Button title='Register' color='#fffff' onPress={() => {/*TODO : LOGIC AND API INTEGRATION*/}}/>
                    </View>
                    <View className='flex-row self-center'>
                        <Text className='self-center pt-6 text-lg'>Already have an account?</Text>
                        <TouchableOpacity onPress={()=>router.push('/screens/Login')}><Text className='self-center underline pt-6 left-1 text-lg'>Log-in</Text></TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

export default RegisterScreen;