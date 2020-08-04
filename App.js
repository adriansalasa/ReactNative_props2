/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import CustomButton from './Components/CustomButton';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: 0
    }
  }

  addItem = ()=> { this.setState({item : (this.state.item + 1)})}

  render(){
    return(
      <View style={styles.container}>
        <CustomButton onPress={this.addItem} />
        <Text style={{marginTop: 10}}>Total Item : {this.state.item}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }
})

