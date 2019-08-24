/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, Button
} from 'react-native';
import { gray, white, black } from 'ansi-colors';



const App = () => {
  return (
    <View style={{padding:50}}> 
      <View>
       <TextInput style={{padding:10, borderColor:'gray', borderWidth:1}} placeholder='Enter your Notes'/> 
       <Button title='ADD'/>
      </View>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
  },
  
});

export default App;
