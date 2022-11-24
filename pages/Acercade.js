import {Component} from "react";
import React, { useState } from 'react';
import { 
    Text, 
    View,
    Alert,
    Image,
    Button, 
    ScrollView,
    StatusBar,
    StyleSheet
} from 'react-native';



export default class Acercade extends Component{


    render() {
        return (                 
            <View  style={styles.container}>
                <Text style={{color:'white',fontSize:25}}> Canciones</Text>             
                <Image
                    style={styles.logo}
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                    />
      
                <Text>Jaimeee</Text>
                
                    
                <Button                    
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />                
                
                 
                <StatusBar style="auto" />
            </View >

        );
      }
}
const styles = StyleSheet.create({
    container: {    
        with:'100%',
        height:'100%',
        backgroundColor: '#f00',
        color:'white'    
    },  
    logo: {
        width: 100,
        height: 100,
    },
});
