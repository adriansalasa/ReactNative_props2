
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

const CustomButton = (props)=> {
    return(
        
            <Button title='Tambah item Baru'
            onPress={()=> props.onPress()} />
        
    )
}

export default CustomButton;
