import {Component} from "react";
import { 
    Text, 
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import Lits from "./estilos/Lits";
// JSON
const Canciones = [
    {
      id: '001',
      title: 'A lot',
      artist: 'savage 21'
    },
    {
      id: '002',
      title: 'Money Trees',
      artist: 'savage 21'
    },
    {
      id: '003',
      title: 'Superman',
      artist: 'savage 21'
    },
    {
        id: '004',
        title: 'Bellacoso',
        artist: 'savage 21'
    },
  ];

export default class View01 extends Component{
    render() {
        return (                 
            <View  style={styles.container}>
                <FlatList 
                    data={Canciones}
                    keyExtractor={item => item.id}
                    renderItem={({item})=><Lits cancion={item}></Lits>}
                />
                
 


            </View >
        );
      }
}
const styles = StyleSheet.create({
    container: {
        
      backgroundColor: '#ff8',
      color:'white'    
    },  
});
