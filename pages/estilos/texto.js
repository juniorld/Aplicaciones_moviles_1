import {Component} from "react";
import { 
    Text, 
    View,
    Alert,
    Button,
    Image, 
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';

class Textto extends Component{
  render()
  {
    const{texto,accion}=this.props;
    return(
    <View>
          <Text style={{color:this.props.color,
            backgroundColor:this.props.fondo,
            fontWeight:this.props.letra,
            borderRadius:this.props.letr,
            }}
            onPress={accion}>          
            {texto}  

          </Text> 
    </View>
    );
         
  }
}

export default Textto;
//export function Textto() { };
const styles = StyleSheet.create({
  container: {    
    flex : 1,
    backgroundColor: 'black',
    color:'white'    
  }, 
  
  titulo :{
      fontSize:30,
      color : '#34434D',
      fontweight: 'bold',
      justifyContent: 'center',
    },
  sub: {
      fontSize:15,
      color : '#696969',
      
  },
  
  

});

