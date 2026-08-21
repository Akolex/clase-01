import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Pantalla1 = () => {
    
    const router = useRouter()

    const volver = () =>{
        router.replace('/')
    }

  return (
    <SafeAreaView>
        <Pressable onPress={volver}>
            <Text>Atras</Text>
        </Pressable>
      <Text>pantalla1</Text>
    </SafeAreaView>
  )
}

export default Pantalla1