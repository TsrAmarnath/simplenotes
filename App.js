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


const App = () => {

  const [enteredNotes, setEnteredNotes] = useState('');
  const [notesArray , setNotesArray] = useState([]);
  enteredNotesHandler = (enteredtext)=>{
    setEnteredNotes(enteredtext);
  }

  addNotesHandler = ()=>{
   setNotesArray(notesArray=> [...notesArray, enteredNotes]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter your Notes' onChangeText={enteredNotesHandler}  value={enteredNotes} />
        <Button onPress={addNotesHandler} title='ADD' />
      </View>
      <View>
{notesArray.map((notes, index) => <View style={styles.listItems} key={index}><Text>{notes}</Text></View>)}
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
  },
  listItems:{
    padding:10,
    marginVertical: 10,
    backgroundColor:'gray',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5
  } 

});

export default App;
