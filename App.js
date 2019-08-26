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
  TextInput, Button, FlatList
} from 'react-native';
import NotesItem from './Components/Custom/NotesItem';
import NotesInput from './Components/Custom/NotesInput';


const App = () => {

  const [enteredNotes, setEnteredNotes] = useState('');
  const [notesArray , setNotesArray] = useState([]);
  enteredNotesHandler = (enteredtext)=>{
    setEnteredNotes(enteredtext);
  }

  addNotesHandler = ()=>{
   setNotesArray(notesArray=> [...notesArray, {id: Math.random().toString(), value: enteredNotes}]);
  }
  return (
    <View style={styles.screen}>
     <NotesInput enteredNotesHandler={enteredNotesHandler} enteredNotes={enteredNotes} addNotesHandler={addNotesHandler} />
      <FlatList keyExtractor={(item,index)=> item.id} data={notesArray} renderItem={(itemData)=><NotesItem value={itemData.item.value} />}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default App;
