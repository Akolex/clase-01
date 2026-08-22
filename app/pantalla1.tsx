import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const miImagen = require('../assets/images/300.jpeg')

const Pantalla1 = () => {
    
    const router = useRouter()


    const volver = () =>{
        router.replace('/')
    }

    return (
        <SafeAreaView style={{flex:1, padding:16, backgroundColor:'#0f1117'}}>
            {/* Header */}
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Pressable onPress={volver}>
                        <Ionicons size={32} color='#FFFFFF' name='arrow-back-outline'/>
                </Pressable>
                <Text></Text>
            </View>

            {/* Imagen de perfil */}
            <View style={{alignItems:'center', marginTop:20}}>
                <Image
                    source={miImagen}
                    style={{width:200, height:200, borderRadius:100}}
                    resizeMode='cover'
                />
            </View>

            {/* Info */}
            <View style={{alignItems:'center', marginTop:16}}>
                <Text style={{color:'#ffffff', fontSize:24, fontWeight:'bold'}}>
                    Roberto Pérez
                </Text>
                    <Text style={{color:'#94a3b8', fontSize:14, marginTop:4}}>
                            Desarrollador FullStack · React Native
                    </Text>
            </View>

            {/* Divisor */}
            <View style={{backgroundColor:'#334155', height:1, width:'100%', marginVertical:24}} />

            {/* Columnas alineadas */}
            <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>128</Text>
                    <Text style={{color:'#94a3b8', fontSize:14, marginTop:4}}>Posts</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>4.2K</Text>
                    <Text style={{color:'#94a3b8', fontSize:14, marginTop:4}}>Seguidores</Text>             
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>312</Text>
                    <Text style={{color:'#94a3b8', fontSize:14, marginTop:4}}>Siguiendo</Text>             
                </View>
            </View>
            <View style={{backgroundColor:'#334155', height:1, width:'100%', marginVertical:24}} />
                <Pressable style={({pressed}) => [
                    {
                        backgroundColor:'#6366f1',
                        borderRadius:12,
                        paddingVertical:14,
                        width:'100%'
                    },
                    pressed && {opacity:0.7}
                ]}>
                    <Text style={{color:'#ffffff', fontSize:24, fontWeight:'bold', textAlign:'center'}}>
                        Seguir
                    </Text>
                </Pressable>
                <Pressable style={({pressed}) => [
                    {
                        borderWidth:2,
                        borderColor:'#6366f1',
                        backgroundColor:'transparent',
                        borderRadius:12,
                        paddingVertical:14,
                        width:'100%',
                        marginTop:12
                    },
                    pressed && {opacity:0.6}
                ]}>
                    <Text style={{color:'#6366f1', fontSize:20, fontWeight:'bold', textAlign:'center'}}>
                        Mensaje
                    </Text>
                </Pressable>
        </SafeAreaView>
    )
}


export default Pantalla1