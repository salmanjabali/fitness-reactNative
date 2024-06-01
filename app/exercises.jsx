import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExerciseBodyPart } from '../api/exerciseDB';
import { demoExercises } from '../constants';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

export default function Exercises() {

    const router = useRouter();
    const [exercises, setExercises] = useState([])
    const item = useLocalSearchParams();
    useEffect(() => {
        if (item) getExercises(item.name)
    }, [item])

    const getExercises = async (bodyPart) => {
        let data = await fetchExerciseBodyPart(bodyPart);
        
        setExercises(data)
    }
    return (
        <ScrollView>

            <StatusBar style='light'></StatusBar>
            <Image
                source={item.image}
                style={{ width: wp(100), height: hp(45) }}
                className="rounded-b-[40px]"
            />

            <TouchableOpacity
            onPress={() => router.back()}
                className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
                style={{ width: hp(5.5), height: hp(5.5), marginTop: hp(7) }}
            >
                <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
            </TouchableOpacity>

            {/* exercises */}
            <View className="mx-4 space-y-3 mt-4">
                <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
                    {item.name} exercises
                </Text>
                <View>
                    <ExerciseList data={exercises} />
                </View>
            </View>
            
        </ScrollView>
    )
}