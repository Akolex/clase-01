// Escribir rnfe + enter

import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
        <SafeAreaView style={{flex:1, padding:16, backgroundColor:'#DFE9F3'}}>
            <Text style={styles.titulo}>Menu Clase 01</Text>
            <Link style={styles.button} href={'/pantalla1'}> Pantalla 1 </Link>
            <Link style={styles.button} href={'/pantalla2'}>Pantalla 2</Link>
        </SafeAreaView>
  )
}


const styles=StyleSheet.create({
    titulo:{
        textAlign:'center',
        fontSize:28,
        color:'#0000ff',
        fontWeight:'900'
    },
    button:{
        textAlign:'center',
        backgroundColor:'#0097A7',
        color:'#fff123',
        marginVertical:10,
        borderRadius:8,
        fontSize:24,
    }
})

export default Home