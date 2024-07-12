import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView to ensure UI elements respect safe area boundaries
import { StatusBar } from 'expo-status-bar'; // Import StatusBar component from Expo for controlling the status bar appearance
import { login } from '../api/api';
import { TouchableOpacity } from 'react-native-gesture-handler'; // Import TouchableOpacity for handling touch events
import Animated, { FadeInDown }  from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import functions for responsive screen percentages
import { useRouter } from 'expo-router';


const Login = () => {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userData = { username: username, password: password };
      const response = await login(userData); 
      router.push('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5"> 
            {/* SafeAreaView component to provide a safe area for the content, with flex layout, white background, and space between items */}
            <StatusBar style="dark">This is a home page</StatusBar> 
            {/* StatusBar with dark style for the home page */}

            {/* Container for punchline text and avatar */}
            <View className="flex justify-center items-center mx-5 w-100 h-full">
                {/* View container with horizontal flex direction, space between children, centered items, and horizontal margin */}
                
                <View className="inline-block align-middle">
                  <Text className="pb-5 text-center text-2xl text-rose-500 font-medium">Welcome back</Text>
                  <TextInput
                  className="my-2 px-4 py-3 rounded-full border w-80 h-12"
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                  />
                  <TextInput
                  className="my-2 px-4 py-3 rounded-full border w-80 h-12"
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                  />

<Animated.View entering={FadeInDown.delay(200).springify()} >
                    {/* Animated view for the button, fading in from the top with a delay */}
                    <TouchableOpacity
                        onPress={() => handleRegister() }
                        style={{ width: wp(80), height: hp(7) }}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200 mt-5" 
                    >
                        {/* TouchableOpacity button, navigates to 'home' on press, with dynamic size, rose background, centered content, rounded borders, and a neutral border */}
                        <Text style={{ fontSize: hp(2) }} className="text-white tracking-widest">
                            Login
                        </Text>
                        {/* Button text with dynamic font size, white color, bold, and widest tracking */}
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()} >
                    {/* Animated view for the button, fading in from the top with a delay */}
                    <TouchableOpacity
                        onPress={() => router.push('register') }
                        style={{ width: wp(80), height: hp(7) }}
                        className="flex items-center justify-center mx-auto mt-5" 
                    >
                        {/* TouchableOpacity button, navigates to 'home' on press, with dynamic size, rose background, centered content, rounded borders, and a neutral border */}
                        <Text style={{ fontSize: hp(2) }} className="text-rose-500 font-medium tracking-widest">
                            Register Now?
                        </Text>
                        {/* Button text with dynamic font size, white color, bold, and widest tracking */}
                    </TouchableOpacity>
                </Animated.View>

                  {/* <Button className="bg-primary" title="Register" onPress={handleRegister} /> */}
                </View>
            </View>

        </SafeAreaView>
    
  );
};

export default Login;
