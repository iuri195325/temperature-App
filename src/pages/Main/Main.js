import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { styles } from './sytle';

export default function Main() {

const[cidade, setCidade] = useState('');

  return (
    <View style={styles.container}>
       <View style={styles.fundo}>
        <Text>Cidade</Text>
        <TextInput
            value={cidade}
            onChangeText={setCidade}
            placeholder='Digite o nome da cidade'
        />
        <Button
            title='Entrar'/>
        </View>  
   </View>
  );
}