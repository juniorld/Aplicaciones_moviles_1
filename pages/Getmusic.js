import {Component} from "react";
import { 
    Text, 
    View,
    Alert,
    Button, 
    ScrollView,
    StatusBar,
    StyleSheet
} from 'react-native';

export default class Getmusic extends Component{
    render() {
        return (                 
            <View  style={styles.container}>
                <Text style={{color:'white',fontSize:25}}> Canciones</Text>             
                <Text>Ejemplo de APIsss!</Text>                
                <StatusBar style="auto" />
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
