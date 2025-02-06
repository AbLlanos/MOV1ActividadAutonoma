import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../themes/appThemes';
import { Image, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { BotonComponent } from '../components/BotonComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TitleComponent } from '../components/TitleComponent';



type Props = StackScreenProps<RootStackParams, "Screen1">;

export const Screen1 = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <TitleComponent title='Bienvenido' ></TitleComponent>

            <View style={styles.medio}>
                <Image source={require('../img/0001-imagenLogin.png')} style={styles.imagenLogo} />
            </View>

            <BotonComponent textoBoton='Acceder' onPress={()=>navigation.navigate("Screen2")}  />

        </SafeAreaView>


    )
}
