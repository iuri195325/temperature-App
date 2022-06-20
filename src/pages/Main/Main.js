import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button, Image } from 'react-native';
import { styles } from './sytle';
import { axios } from 'axios';
import { logo } from '../../assets/tijolo1.png'
import Result from '../../components/Result/Result';


export default function Main({navigation}) {

const[cidade, setCidade] = useState('');
const[data, setData] = useState([]);
const[temp,setTemp] =useState([]);

const Adicionar = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=ff12fe6fc68e73aa54d073a4151abdc1`)
        .then((response) => response.json())
        .then((json) => {
          setData(json.weather['0'])
          setTemp(json.main)
        })

}
var icon = data.icon;
var img = `${icon}.png`;
console.log(temp)
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
        <Result result={data} image={img} temp={temp}/>
        </View>

   </View>
  );
}

