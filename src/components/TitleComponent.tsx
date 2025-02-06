import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../themes/appThemes';


interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={styles.TextoPrincipal}>{title}</Text>
    )
}
