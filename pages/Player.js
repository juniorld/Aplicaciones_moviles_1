import {Component,useState} from "react";
import { 
    Text, 
    View,    
    Button,     
    StatusBar,
    StyleSheet,    
    Alert,
    TextInput,
    StatusBar,
    Dimensions
} from 'react-native';



import { GameEngine } from "react-native-game-engine";
//import { Physics, CreateBox, MoveBox, CleanBoxes, Shake } from "./systems";
//import { Box } from "./renderers";
//import Matter from "matter-js";
//import { Accelerometer } from 'react-native-sensors';


export default class Player extends Component{

    constructor(props){
        super(props);

        // variables in State    
        this.state={
        sound:undefined
        };    
    };


  

    
  render() {
    return (                             
        <View style={{ flex: 1 }}>                          

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
