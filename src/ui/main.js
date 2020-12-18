import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView, Dimensions, View, Button } from 'react-native';
import Column from './column.js';
import SubColumn from './subColumn.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Csv from 'csvtojson';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//const csvFilePath='../data/data.csv';


export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataList: ["2.320", "2.330", "2.420", "2.500", "2.550"],
      dataId: 0,
    }

  }


  componentDidMount() {
    /*
    Csv().fromFile(csvFilePath).then((jsonObj) => {
      console.log(jsonObj);
    })*/
  this.interval = setInterval(() => this.setState({ dataId: (this.state.dataId + 1) % 5 }), 1000);
}


  render(){
    return(
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.stockTitle}>
            <View style={styles.stockNum}>
              <Text style={{color:"white", fontSize:windowHeight*0.03, paddingHorizontal:10}}>00423</Text>
            </View>
            <Text style={{color:"white", fontSize:windowHeight*0.03, paddingLeft: 10}}>經濟日報集團</Text>
            </View>
            <Text style={{padding:5, color:'#21557C', fontSize:windowHeight*0.025}}>HKD</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 2, alignItems:"center", justifyContent: 'center'}}>
                <MaterialCommunityIcons name="triangle" color="green" size={windowHeight*0.05} />
              </View>
              <View style={{flex: 3, alignItems:"flex-end", justifyContent: 'center'}}>
                <Text style={{color:'green', fontSize:windowHeight*0.05}}>{this.state.dataList[this.state.dataId]}</Text>
              </View>
              <View style={{flex: 6}}>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={{color: 'green', fontSize:windowHeight*0.03, alignSelf: 'flex-end'}}> {"+0.020 (+1.23%)"} </Text>
              </View>
              <View style={{flex: 1}}>

              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <SubColumn bg={"#131B24"} stat={"高"} statValue={"1.670"}>
              </SubColumn>
              <SubColumn bg={"#131B24"} stat={"開"} statValue={"1.670"}>
              </SubColumn>
              <SubColumn bg={"#131B24"} stat={""} statValue={""}>
              </SubColumn>
              <SubColumn bg={"#131B24"} stat={""} statValue={""}>
              </SubColumn>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <SubColumn bg={"#131B24"} stat={"收"} statValue={"1.620"}>
              </SubColumn>
              <SubColumn bg={"#131B24"} stat={"低"} statValue={"1.620"}>
              </SubColumn>
              <SubColumn bg={"#131B24"} stat={""} statValue={""}>
              </SubColumn>
              <SubColumn bg={"#131B24"} stat={""} statValue={""}>
              </SubColumn>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#1B2429"} stat={"成交金額"} statValue={"92.00K"} isButton={true}>
              </Column>
              <Column bg={"#1B2429"} stat={"成交股數"} statValue={"56.06K"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#131B24"} stat={"交易宗數"} statValue={"21"}>
              </Column>
              <Column bg={"#131B24"} stat={"每手股數"} statValue={"2000"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#1B2429"} stat={"買賣差價"} statValue={"0.010/0.010"}>
              </Column>
              <Column bg={"#1B2429"} stat={"入場費"} statValue={"3280"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#131B24"} stat={"帳面淨值"} statValue={"HKD 2.109"}>
              </Column>
              <Column bg={"#131B24"} stat={"每股派息"} statValue={"HKD 0.085"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#1B2429"} stat={"市盈率"} statValue={"9.90"}>
              </Column>
              <Column bg={"#1B2429"} stat={"周息率"} statValue={"5.18%"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#131B24"} stat={"預測市盈"} statValue={""}>
              </Column>
              <Column bg={"#131B24"} stat={"預測息率"} statValue={""}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#1B2429"} stat={"市盈率"} statValue={"9.90"}>
              </Column>
              <Column bg={"#1B2429"} stat={"周息率"} statValue={"5.18%"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#131B24"} stat={"1個月高"} statValue={"1.700"}>
              </Column>
              <Column bg={"#131B24"} stat={"52周高"} statValue={"1.750"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#1B2429"} stat={"1個月低"} statValue={"1.550"}>
              </Column>
              <Column bg={"#1B2429"} stat={"52周低"} statValue={"1.240"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#131B24"} stat={"14天 RSI"} statValue={"46.732"}>
              </Column>
              <Column bg={"#131B24"} stat={"10天平均"} statValue={"1.617"}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#1B2429"} stat={"市值"} statValue={"707.82M"}>
              </Column>
              <Column bg={"#1B2429"} stat={"20天平均"} statValue={""}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#131B24"} stat={"沽空(上午)"} statValue={""}>
              </Column>
              <Column bg={"#131B24"} stat={"50天平均"} statValue={""}>
              </Column>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Column bg={"#1B2429"} stat={"沽空%"} statValue={""} isButton={true}>
              </Column>
              <Column bg={"#1B2429"} stat={"250天平均"} statValue={""}>
              </Column>
            </View>

          </ScrollView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    padding: 10
  },
  scrollView: {

  },
  stockTitle: {
    height: windowHeight*0.05,
    flexDirection: "row",
    alignItems:'center',
    padding:5,
    borderColor: "#455562",
    borderBottomWidth: 1,


  },
  stockNum: {
    backgroundColor: "#2F3F4F",
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
    borderColor: "#455562",
    borderWidth: 1
  }
})
