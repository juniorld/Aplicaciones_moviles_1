import {Component} from "react";

import MapView , { Marker, Polyline } from 'react-native-maps';
import * as React from 'react';
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

  constructor(){
    super();
    this.state = {
        ready: false,
        where: {lat:null, lng:null},
        error: null,
       
        latitude1: -17.748811692293902,
        longitude1:  -63.1493895583319,
        latitude2: -17.763257,
        longitude2: -63.159766,
        latitude: null,
        longitude: null,

    }
}


    render()
     {
        return (                 
           <View style={styles.container}>
    
    <MapView 
      style={styles.map} 
      initialRegion={{
        latitude: this.state.latitude1,
        longitude: this.state.longitude1,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
      }}>
      <Marker 
        draggable
        
        
       
      />

    
    </MapView>
    
  </View>

        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
   
    width: '100%',
    height: '100%'
  },
});