import React from 'react';
import { KeyboardType, Text, TextInput, View } from 'react-native';
import { styles } from '../themes/appThemes';

interface Props {
    labelFormulario: string;
    placeHolder: string;
    tipoBoton?: KeyboardType;
    name: string;
    handledChange: (name: string, value: string) => void;
}

export const CamposFormulario  = ({ labelFormulario, placeHolder, tipoBoton,name,handledChange}: Props) => {
    return (
        <View>
            <Text style={styles.textoCampoFormulario}>{labelFormulario}</Text>

            <TextInput
                style={styles.inputCampoNumero}
                placeholder={placeHolder}
                placeholderTextColor="gray"
                keyboardType={tipoBoton}
                onChangeText={(value)=> handledChange(name,value)}
            />

        </View>
    );
};