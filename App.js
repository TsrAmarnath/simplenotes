/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,  { Fragment, useState }  from 'react';
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

  const [enteredNotes, setEnteredNotes] = useState('');

  enteredNotesHandler = (enteredtext)=>{
    setEnteredNotes(enteredtext);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter your Notes' onChangeText={enteredNotesHandler}  value={enteredNotes} />
        <Button title='ADD' />
      </View>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  }
  ,
  input: {
    width: '80%', padding: 10, borderColor: 'gray', borderWidth: 1
  }


});

export default App;
