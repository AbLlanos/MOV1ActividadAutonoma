import React, { useDeferredValue, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, useWindowDimensions } from 'react-native';
import { styles } from '../themes/appThemes';
import { RootStackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

import { SafeAreaView } from 'react-native-safe-area-context';
import { CamposFormulario } from '../components/CamposFormulario';
import { BotonComponent } from '../components/BotonComponent';
import { TitleComponent } from '../components/TitleComponent';


type Props = StackScreenProps<RootStackParams, "Screen2">;

interface Numeros {
    numero1: number
    numero2: number

}

export const Screen2 = ({ navigation }: Props) => {
    const { height } = useWindowDimensions();

    const [numerosForm, setNumerosForm] = useState<Numeros>({
        numero1: NaN,
        numero2: NaN,
    });

    const [resultado, setResultado] = useState('');

    const handledChange = (name: string, value: string) => {
        setNumerosForm({
            ...numerosForm,
            [name]: value === "" ? NaN : Number(value)
        });
    };
    const calcularDivision = () => {

        if (isNaN(numerosForm.numero1) || isNaN(numerosForm.numero2)) {
            return setResultado('Campos incompletos');

        } else {

            if (numerosForm.numero1 === 0 && numerosForm.numero2 === 0) {
                setResultado("Indeterminado");
            } else if (numerosForm.numero2 === 0) {
                setResultado("No existe división para 0");
            } else {

                setResultado((numerosForm.numero1 / numerosForm.numero2).toString());
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}  >

            <TitleComponent title='Formulario' ></TitleComponent>

            <View style={{...styles.contenedorForm,height:height*0.65}}>
                    <CamposFormulario labelFormulario='Ingrese el primer número' placeHolder='Numerador' name='numero1' tipoBoton='numeric' handledChange={handledChange} />

                    <CamposFormulario labelFormulario='Ingrese el segundo número' placeHolder='Denominador' name='numero2' tipoBoton='numeric' handledChange={handledChange} />

                    <TouchableOpacity style={styles.bottonDividir} onPress={calcularDivision}>
                        <Text style={styles.btnTextoRegistro}>Dividir</Text>
                    </TouchableOpacity>

                    <Text style={styles.textoBtnResultado} >El resultado de la división es: </Text>
                    <Text style={styles.textoBtnResultado}>{resultado}</Text>
                    </View>

            <View style={{...styles.contenedor,height:height*0.2}}>
                <BotonComponent textoBoton='Regresar' onPress={() => navigation.navigate("Screen1")} />
            </View>

        </SafeAreaView>


    );
}