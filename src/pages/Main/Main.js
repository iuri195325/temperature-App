import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { styles } from './sytle';
import { axios } from 'axios';


export default function Main() {

const[cidade, setCidade] = useState('');
const[data, setData] = useState([]);

const Adicionar = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=ff12fe6fc68e73aa54d073a4151abdc1`)
        .then((response) => response.json())
        .then((json) => {
          setData(json.weather['0'].icon)
        })
}
console.log(data);
  return (
    <View style={styles.container}>
       <View style={styles.fundo}>
        <Text style={styles.text}>Cidade</Text>
        <TextInput
            style={styles.input}
            value={cidade}
            onChangeText={setCidade}
            placeholder='Digite o nome da cidade'
        />
        <Button
          onPress={() => Adicionar()}
            title='Adicionar'/>
        </View>  
   </View>
  );
}