import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Pantalla1 = () => {
    
    const router = useRouter()

    const volver = () =>{
        router.replace('/')
    }

    return (
        <SafeAreaView style={{flex:1, padding:16, backgroundColor:'#DFE9F3'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Pressable onPress={volver}>
                        <Ionicons size={48} color='#000000' name='arrow-back-outline'></Ionicons>
                </Pressable>
                <Text> Pantalla 1 </Text>
                <Text></Text>
            </View>

            <View style={{backgroundColor:'#3E7685', flex:1, flexDirection:'row', gap:20}}>
                <View style={{backgroundColor:'#a98cd8', height:20, width:20}}/>
                <View style={{backgroundColor:'#66ae9e', height:20, width:20}}/>
                <View style={{backgroundColor:'#dd6611', height:20, width:20}}/>
            </View>
            <View style={{backgroundColor:'#d10d10', flex:2}}/>
            <View style={{backgroundColor:'#181828', flex:1}}/>
            <View style={{backgroundColor:'#a0ed04', height:100}}/>

        </SafeAreaView>
    )
}

export default Pantalla1