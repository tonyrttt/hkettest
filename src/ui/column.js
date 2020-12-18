import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Button } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class column extends Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <View style={{backgroundColor: this.props.bg, height: windowHeight*0.05, flex: 2 ,flexDirection: 'row'}}>
      <View style={{ alignItems:'flex-start', justifyContent:"center", flex:1, paddingHorizontal:5}}>
        <Text style={{padding:5, color:'#21557C', fontSize:windowHeight*0.02}}>{this.props.stat}</Text>

        </View>
        { this.props.isButton ?
          <View style={styles.bt}>
          <Text style={{fontSize: windowHeight*0.025, paddingHorizontal:5, color:'#21557C'}}>{">"}</Text>
          </View> : null }
        <View style={{ alignItems:'flex-end', justifyContent:"center", flex:1, paddingHorizontal:5}}>
        <Text style={{padding:5, color:'white', fontSize:windowHeight*0.02}}>{this.props.statValue}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bt: {
    borderWidth: 1,
    borderColor: '#21557C',
    margin: 5

  }
})
