import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button, Image } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { styles } from './sytles';




export default function Result(props) {
    const temp = (props.temp.temp - 273).toFixed(2)
    const temp_max = (props.temp.temp_max - 273).toFixed(2)
    const temp_min = (props.temp.temp_min - 273).toFixed(2)
    const feels = (props.temp.feels_like - 273).toFixed(2)
    return (
        <View style={styles.fundo}>
            <Image style={styles.img} source={require('../../assets/04d.png')}/>
            <Text style={styles.letras}>Tempo: {props.result.main}</Text>
            <Text style={styles.letras}>Descrição: {props.result.description}</Text>
            <Text style={styles.letras}>Temperatura: {temp}</Text>
            <Text style={styles.letras}>Temperatura Maxima: {temp_max}</Text>
            <Text style={styles.letras}>Temperatura Minima: {temp_min}</Text>
            <Text style={styles.letras}>Sensação: {feels}</Text>
            <Text style={styles.letras}>Humidade do ar: {props.temp.humidity}</Text>
        </View>
    );
}