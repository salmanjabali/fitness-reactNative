import { View, Text, Image } from 'react-native'; // Import core components from React Native
import React from 'react'; // Import React library
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import functions for responsive screen percentages
import { StatusBar } from 'expo-status-bar'; // Import StatusBar component from Expo for controlling the status bar appearance
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient component from Expo for gradient backgrounds
import { TouchableOpacity } from 'react-native-gesture-handler'; // Import TouchableOpacity for handling touch events
import Animated, { FadeInDown } from 'react-native-reanimated'; // Import Animated and animation effects from Reanimated
import { useRouter } from 'expo-router'; // Import useRouter for navigation

export default function Index() { // Define Index component as a default export
    const router = useRouter(); // Initialize router for navigation

    return (
        <View className="flex-1 flex justify-end">
            {/* Main container with flex layout and content justified to the bottom */}
            <StatusBar style="light" />
            {/* StatusBar with light style */}

            <Image 
                className="h-full w-full absolute" 
                source={require('../assets/images/welcome.jpg')} 
            />
            {/* Full-screen background image, positioned absolutely */}

            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                className="flex justify-end pb-12 space-y-8"
            >
                {/* Linear gradient overlay, starting from transparent to dark gray, occupying 70% of the screen height, with flex layout, bottom padding, and vertical spacing */}

                <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
                    {/* Animated view that fades in from the top with a delay, centered horizontally */}
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        Best <Text className="text-rose-500">Workouts</Text>
                    </Text>
                    {/* First line of the main title, with dynamic font size, bold, wide tracking, and white color, and a highlighted word */}
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        For you
                    </Text>
                    {/* Second line of the main title, styled similarly */}
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()} >
                    {/* Animated view for the button, fading in from the top with a delay */}
                    <TouchableOpacity
                        onPress={() => router.push('register')}
                        style={{ width: wp(80), height: hp(7) }}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        {/* TouchableOpacity button, navigates to 'home' on press, with dynamic size, rose background, centered content, rounded borders, and a neutral border */}
                        <Text style={{ fontSize: hp(3) }} className="text-white font-bold tracking-widest">
                            Get Started
                        </Text>
                        {/* Button text with dynamic font size, white color, bold, and widest tracking */}
                    </TouchableOpacity>
                </Animated.View>

            </LinearGradient>
        </View>
    );
}
