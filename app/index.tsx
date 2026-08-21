// Escribir rnfe + enter

import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <View>
        <SafeAreaView>
            <Text style={styles.titulo}>Menu Clase 01</Text>
            <Link href={'/pantalla1'}>Pantalla 1</Link>
            <Link href={'/pantalla2'}>Pantalla 2</Link>
        </SafeAreaView>
    </View>
  )
}


const styles=StyleSheet.create({
    titulo:{
        textAlign:'center',
        fontSize:100,
        color:'#0000ff',
        fontWeight:'900'
    },
})

export default Home