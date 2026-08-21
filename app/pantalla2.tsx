import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Pantalla2 = () => {

    const router = useRouter()
    const volver = () =>{
        router.replace('/')
    }

    return (
        <SafeAreaView style={{flex:1, padding:16, backgroundColor:'#DFE9F3'}}>
            <Pressable onPress={volver}>
                <Text>
                    <Ionicons size={48} color='#000000' name='arrow-back-outline'></Ionicons>
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Pantalla2