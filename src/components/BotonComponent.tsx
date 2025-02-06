import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../themes/appThemes'

interface Props {
    textoBoton: string,
    onPress: () => void;

}


export const BotonComponent = ({ textoBoton, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.btnRegistro} onPress={onPress}>
            <Text style={styles.btnTextoRegistro}>{textoBoton} </Text>
        </TouchableOpacity>
    )
}
