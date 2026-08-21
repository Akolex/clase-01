// Escribir rnfe + enter

import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <View>
        <SafeAreaView>
            <Text style={styles.titulo}>Menu clase 01</Text>
            <Link href={'/pantalla1'}>Pantalla1</Link>
        </SafeAreaView>
    </View>
  )
}


const styles=StyleSheet.create({
    titulo:{
        textAlign:'center',
        fontSize:28,
        color:'#0000ff',
        fontWeight:'900'
    }
})
export default Home