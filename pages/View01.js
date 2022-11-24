import {Component} from "react";
import { 
    Text, 
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import Lits from "../../reactnative-menu-api-main1/pages/estilos/Lits";
import axios from "axios"; 
// JSON

const Canciones = [
    {
      id: '001',
      title: 'A lot',
      artist: 'savage 21'
    },
    {
      id: '002',
      title: 'Money Trees',
      artist: 'savage 21'
    },
    {
      id: '003',
      title: 'Superman',
      artist: 'savage 21'
    },
    {
        id: '004',
        title: 'Bellacoso',
        artist: 'savage 21'
    },
  ];

export default class View01 extends Component{

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getSongs() {
    try {
      const response = await axios.get('http://tecnoprofe.com/api/cancion');
      this.setState({data:response});
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getSongs();
  }
  
    render() {
        return (                 
            <View  style={styles.container}>
                <FlatList 
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({item})=><Text style={{backgroundColor:'#05ffaa'}}>{item.id}</Text>}
                   // renderItem={({item})=><Lits cancion={item}></Lits>}
                />
                
 


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
