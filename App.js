import React, { Component } from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";


import Home  from "./pages/Home";
import Acercade from "./pages/Acercade";
import Getmusic  from "./pages/Getmusic";
import Postmusic  from "./pages/Postmusic";
import Imc from "./pages/Imc";
import View1 from "./pages/View01";
import geo from "./pages/geo";

const Menu=createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Menu.Navigator>                  
        <Menu.Screen name="Houses" component={Home}/>
          <Menu.Screen name="Traer Musica" component={Getmusic}/>          
          <Menu.Screen name="Registrar Musica" component={Postmusic}/>
          <Menu.Screen name="Acerca de mi" component={Acercade}/>
          <Menu.Screen name="IMC" component={Imc}/>
          <Menu.Screen name="View" component={geo}/>
          <Menu.Screen name="View Example" component={View1}/>
          
        </Menu.Navigator>
      </NavigationContainer>        
    );
  }
}
