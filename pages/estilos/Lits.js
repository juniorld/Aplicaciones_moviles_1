import {Component,useState} from "react";
import { 
    Text, 
    View,    
    Button,     
    StatusBar,
    StyleSheet,    
    Alert,
    TouchableOpacity,
    TextInput
} from 'react-native';

// JSON




export default class Lits extends Component{


  

  presionar = (valor) => {
    
   
     alert (valor);
  }
    render() {
        return (  
        <TouchableOpacity onPress={()=> this.presionar(this.props.cancion.title)}>     
            <View  style={styles.container}>
                <Text style={styles.cancion1}>
                  {this.props.cancion.titulo}
                    
 
                </Text>
                <Text style={styles.artista1}>
                {this.props.cancion.artista}
                </Text>

            </View >
          </TouchableOpacity>  
        );
      }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
    },
    cancion1:{
      fontSize:30,
      color : '#34434D',
      fontweight: 'bold',
    
    } ,
    artista1:{
      fontSize:15,
      color : '#696969',
    } ,
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20
    },
});
