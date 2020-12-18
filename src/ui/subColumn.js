import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Button } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SubColumn extends Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <View style={{backgroundColor: this.props.bg, height: windowHeight*0.04, flex: 2 ,flexDirection: 'row'}}>
      <View style={{ alignItems:'flex-start', justifyContent:"center", flex:1, paddingHorizontal:5}}>
        <Text style={{padding:5, color:'#21557C', fontSize:windowHeight*0.02}}>{this.props.stat}</Text>

        </View>

        <View style={{ alignItems:'flex-end', justifyContent:"center", flex:2, paddingHorizontal:5}}>
        <Text style={{padding:5, color:'white', fontSize:windowHeight*0.02}}>{this.props.statValue}</Text>
        </View>
      </View>
    );
  }
}
