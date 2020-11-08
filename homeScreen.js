import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
  
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Homescreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Header
          backgroundColor={'turquoise'}
          centerComponent={{
            text: 'KIKO:THE ONLINE DICTIONARYT',
            
          }}
        />
   <TextInput style={styles.inputbox}onChangeText={text =>
   {
     this.setState({
       text:text,
       isSearchPressed:false,
       word: "Loading......",
       laxicalCategory:'',
       examples : [],
       defination:""
      });
   }}value={this.state.text}
   />


   <TouchableOpacity style={styles.button} onPress={()=>{
     this.setState({isSearchPressed:true});
     //this.getWord({this.state.text});
   }}>
   <Text style={styles.butoontext}>SEARCH</Text>
    </TouchableOpacity>

      <Text style={styles.displaytext}> {this.state.displayText} </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"grey"
  },
  inputbox:{
    marginTop:200,
    width:"80%",
    alignSelf:"center",
    height:40,
    textAlign:"center",
    borderWidth:4,
    outline:"none",
    backgroundColor:"white"
  },
  button:{
    alignSelf:"center",
    backgroundColor:"red"
  },
  butoontext:{
    textAlign:"center",
    fontSize:30
  },
  displaytext:{
    textAlign:"center",
    color:"blue",
    fontSize:30,
    fontFamily:"lucida grande"
  }
 
});
