import { View, Text, Image } from 'react-native'; // Import core components from React Native
import React from 'react'; // Import React library for creating components
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import functions to handle responsive screen percentages
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView to ensure UI elements respect safe area boundaries
import { StatusBar } from 'expo-status-bar'; // Import StatusBar component from Expo for controlling the app's status bar appearance
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for using vector icons
import ImageSlider from '../components/ImageSlider'; // Import custom ImageSlider component for image carousel
import BodyParts from '../components/BodyParts'; // Import custom BodyParts component to display body parts

export default function Home() { // Define Home component as a default export
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}> 
            {/* SafeAreaView component to provide a safe area for the content, with flex layout, white background, and space between items */}
            <StatusBar style="dark">This is a home page</StatusBar> 
            {/* StatusBar with dark style for the home page */}

            {/* Container for punchline text and avatar */}
            <View className="flex-row justify-between items-center mx-5">
                {/* View container with horizontal flex direction, space between children, centered items, and horizontal margin */}
                
                <View className="space-y-2">
                    {/* Nested View for punchline text with vertical spacing */}
                    
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className="font-bold tracking-wider text-neutral-700"
                    >
                        READY TO
                    </Text>
                    {/* First line of the punchline text, styled with dynamic font size, bold, wide tracking, and neutral color */}
                    
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className="font-bold tracking-wider text-rose-500"
                    >
                        WORKOUT
                    </Text>
                    {/* Second line of the punchline text, styled with dynamic font size, bold, wide tracking, and rose color */}
                </View>

                <View className="flex justify-center items-center space-y-2">
                    {/* Nested View for avatar and notification icon, with centered items and vertical spacing */}
                    
                    <Image 
                        className="rounded-full"
                        style={{ height: hp(6), width: hp(6) }}
                        source={require('../assets/images/avatar.jpg')}
                    />
                    {/* Avatar image, rounded, with dynamic size, sourced from local assets */}

                    <View 
                        className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                        style={{ height: hp(5), width: hp(5) }}
                    >
                        {/* Container for the notification icon, rounded, centered, with border and dynamic size */}
                        
                        <Ionicons name="notifications" size={hp(2.5)} color="gray" />
                        {/* Notification icon from Ionicons, with dynamic size and gray color */}
                    </View>
                </View>
            </View>

            <View>
                {/* Container for the ImageSlider component */}
                <ImageSlider />
                {/* ImageSlider component to display a carousel of images */}
            </View>

            <View className="flex-1">
                {/* Container for the BodyParts component with flexible height */}
                <BodyParts />
                {/* BodyParts component to display various body parts for workout */}
            </View>
        </SafeAreaView>
    );
}
