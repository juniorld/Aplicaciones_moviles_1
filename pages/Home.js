import {Component} from "react";
import { 
    Text, 
    View,    
    Button, 
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';

export default class Home extends Component{

    createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    render() {
        return (                 
            
            <View style={{ flex: 1 }}>              
                <View style={{flex:10,flexDirection:'row', backgroundColor:'red', }}>                
                  <Text style={{}}>
                    TITULO 1
                  </Text>                                                   
                </View>   
                <View style={{flex:80,flexDirection:'row', backgroundColor:'blue' }}>                
                  <Text style={{}}>
                    Menu 1
                  </Text>                           
                  <Text style={{}}>
                    Menu 1
                  </Text>                         
                </View> 
                <View style={{flex:15,flexDirection:'row',backgroundColor:'gray',justifyContent:'space-around' }}>                
                  <Text style={{}}>
                    Menu 1
                  </Text>                           
                  <Text style={{}}>
                    Menu 2
                  </Text> 
                  <Text style={{}}>
                    Menu 3
                  </Text> 
                  <Text style={{}}>
                    Menu 4
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
});
