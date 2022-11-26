import * as React from 'react';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import MapView , { Callout, Marker, Polyline,provider } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

//import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from '@env'; // your google cloud api key
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const carImage = require('./img/auto.png')
const corImage = require('./img/corazon.png')

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      apikey={GOOGLE_MAPS_KEY}
    />
  );
};


export default function geo() {

  const [origin, setOrigin] = React.useState({
    latitude:-17.748811692293902,
    longitude:  -63.1493895583319,
  });

  const [destination, setDestination] = React.useState({
    latitude: -17.763257,
    longitude: -63.159766,
  });

  const [des, setdes] = React.useState({
    latitude: -17.769813,
    longitude: -63.015726

  });
 
  const [region, setRegion] = React.useState({
    latitude: -17.763257,
    longitude: -63.159766,
    latitudeDelta: 0.09,
   longitudeDelta: 0.04
  });

  
  

  React.useEffect(() => {
    getLocationPermission();
  }, [])

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted') {
      alert('Permission denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    setOrigin(current);
  }
  


  return (

    <View style={styles.container}>


    <Text>

      <GooglePlacesAutocomplete 
      style={styles.pkaces}
      placeholder='Search'
      fetchDetails={true}
      GooglePlacesSearchQuery={{
        rankby:"distance"
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        
        console.log(data, details)
       setRegion({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        })
      }}
      query={{key: GOOGLE_MAPS_KEY,
        language: 'es',
        components : "country:bo",
        types: "establishment",
        radius: 30000,
        location:`${region.latitude},${region.longitude}`
      }}
    
    /> 
    
    </Text>
    
    <MapView 
    
      style={styles.map} 
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
      }}
      provider="google"
      >
     
    
      <Marker
      draggable
      coordinate={origin}
      image={carImage}
      onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}>
        <Callout>
          <Text>Mi ubicacion</Text>
         </Callout>
        
      </Marker>

      <Marker 
      
          draggable
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
          onDragEnd= {(direction) => setRegion(direction.nativeEvent.coordinate)}
          //onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
      />
      <Marker
       coordinate={des}
       image={corImage}
       onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        
        >
        <Callout>
          <Text>May</Text>
         </Callout>
      </Marker>
        <MapViewDirections
         origin={origin}
         destination={{latitude: region.latitude, longitude: region.longitude}}
         apikey={GOOGLE_MAPS_KEY}
         strokeColor="black"
         strokeWidth={5}
         />
         
         

    
    </MapView>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 50,
    //backgroundColor: 'black',
  // alignItems: 'center',
   // justifyContent: 'center',
  },
  map:{
   
    width: '100%',
    height: '100%'
  },
  pkaces:{
   container: {flex: 0 , position :"absolute", width:"100%", zIndex:1},
   listView : {backgroundColor: 'white'}
    
  },
  input: {
    height: '85%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
},
});
