import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:0,
      margin:0
    },
    fundo: {

        width:"100%",
        height:"90%",
        bottom: 0,
        backgroundColor:"#4F4F4F",
        alignItems:"center",
        borderTopLeftRadius:60,
        borderTopRightRadius:60,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,

    },
    input: {
        width:"90%",
        borderRadius: 50,
        backgroundColor:"#FFF",
        height: 40,
        margin: 12,
        paddingLeft: 10,
         
    },
    text: {
        color:"#fff",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
        
    },
    img: {
        width: '100%',
        height: 360,
    }

  });