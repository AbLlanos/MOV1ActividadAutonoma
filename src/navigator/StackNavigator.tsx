import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { Screen1 } from '../Screens/Screen1';
import { StyleSheet } from 'react-native';
import { Screen2 } from '../Screens/Screen2';
import { styles } from '../themes/appThemes';
import { PRIMARY_COLOR } from '../themes/constants';

export type RootStackParams = {
    Screen1: undefined,
    Screen2: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Screen1'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR
                }
            }}>
            <Stack.Screen name="Screen1"
                options={{
                    title: 'Inicio',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center", 
                    
                }}
                component={Screen1} />

            <Stack.Screen name="Screen2"
                options={{
                    title: 'Formulario',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center", 
                }}
                component={Screen2} />
        </Stack.Navigator>
    );
}

