import { StyleSheet } from "react-native";
import { CUARTIARY_COLOR, QUINTO_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "./constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:5,
        alignItems:"center",
    },

    contenedor:{
        width:"100%",
    },
    contenedorForm:{
        width:"100%",
        alignContent:"center",
        justifyContent:"center"
    },

    //SCREEN 1

    TextoPrincipal: {
        fontSize: 60,
        width:"100%",
        justifyContent: "center",
        backgroundColor: TERTIARY_COLOR,
        textAlign:"center",
        borderRadius:10,
        paddingVertical:30,
        borderColor:CUARTIARY_COLOR,
        borderWidth:1,
    },

    medio:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        width:"100%",
    },


    imagenLogo: {
        borderRadius: 250,
        width: 350,
        height: 350,
        marginVertical:15,
    },

    btnRegistro: {
        width:"100%",
        backgroundColor: SECONDARY_COLOR,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent:"center",
        borderColor:QUINTO_COLOR,
        borderWidth:1,
    },

    btnTextoRegistro: {
        fontSize: 30,
        fontWeight: "bold",
        color:QUINTO_COLOR,
    },

    //Screen2

    textoCampoFormulario: {
        fontSize: 20,
        fontWeight: "bold",
        color:CUARTIARY_COLOR,
        marginVertical:15,
        textAlign:"center"
    },

    
    inputCampoNumero: {
        padding: 15,
        backgroundColor: QUINTO_COLOR,
        fontSize:15,
        borderRadius:20,
        borderColor:CUARTIARY_COLOR,
        borderWidth:1,
        
    },

    bottonDividir: {
        backgroundColor: CUARTIARY_COLOR,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical:25,
        borderRadius:20,
        borderColor:QUINTO_COLOR,
        borderWidth:1,
    },

    textoBtnResultado:{
        fontSize:20,
        color:CUARTIARY_COLOR,
        textAlign:"center",
    },

    btnRegresar: {
        backgroundColor: SECONDARY_COLOR,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:"center",
        marginVertical:10,

    },

    //Membrete

    titulosVentanas: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: '700',
    }


})
