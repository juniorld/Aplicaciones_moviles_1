import {Component,useState} from "react";
import { 
    Text, 
    View,    
    Button,     
    StatusBar,
    StyleSheet,    
    Alert,
    TextInput
} from 'react-native';

class Texto extends Component{

  render() {
    return (
      <View>                    
        <Text style={{backgroundColor:this.props.color}}>
          HOLA 
        </Text>                                                   
      </View>   
    );
  }
}



export default class Imc extends Component{

  constructor(props){
    super(props);

    // variables in State
    this.state={
      peso:"",
      altura:"",
      detalle:"",
      imcok:""
    };

    // IMC = PESO/ (ALTURA*ALTURA)
  };

  calculo(valor){    
    this.setState({altura:valor})
    
    var imc= this.state.peso/(this.state.altura*this.state.altura)
    imc=Math.round(imc*100)/100;
    
    if (imc<=18.5){
      this.setState({detalle:"Bajo peso"})
    }
    else if(imc>18.5 & imc<=24.9){
      this.setState({detalle:"Peso Normal"})
    }
    else if(imc>25 & imc<=29.9){
      this.setState({detalle:"Sobrepeso"})
    }
    else if(imc>=30){
      this.setState({detalle:"Obesidad"})
    }
    
    this.setState({imcok:imc})


  };

    
  render() {
    return (                             
        <View style={{ flex: 1 }}>              
            <View style={{flex:10,flexDirection:'row', backgroundColor:'#FFAA1A', }}>                
              <Text style={{}}>
                CALCULADORA DEL IMC
              </Text>              
              <Texto color='red'/> 
            </View>   
            <View style={{flex:80, backgroundColor:'#BBAACC' }}>
                <Text >
                    INTRODUZA SU PESO EN KG {this.state.peso} 
                </Text>                                                   
                <TextInput
                  value={this.state.peso}   
                  onChangeText={(tttt)=>this.setState({peso:tttt})}
                  style={styles.input}                        
                />       
                <Text style={{}}>
                    INTRODUZA SU ALTURA EN Metros: {this.state.altura}
                </Text>                                                   
                <TextInput
                  value={this.state.altura}
                  onChangeText={(text)=>this.calculo(text)}
                  style={styles.input}
                />
                <Text>
                    Su índice de masa corporal es:
                </Text>  
                <Text style={styles.input}>                      
                    Resultado: {this.state.detalle}
                </Text>
                <Text style={styles.input}>                      
                    IMC={this.state.imcok}
                </Text>                                         
            </View> 
            <View style={{flex:15,flexDirection:'row',backgroundColor:'#FCFBFF',justifyContent:'space-around' }}>                
              <Text style={{}}>
                HOMBRE
              </Text>                           
              <Text style={{}}>
                MUJER
              </Text>                                       
            </View> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {    
      backgroundColor: '#ff8',
      color:'white'    
    },  
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
