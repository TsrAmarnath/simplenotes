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
  const [modalOpen, setModalOpen] = useState(false);
  enteredNotesHandler = (enteredtext)=>{
    setEnteredNotes(enteredtext);
  }

  addNotesHandler = ()=>{
   setNotesArray(notesArray=> [...notesArray, {id: Math.random().toString(), value: enteredNotes}]);
   setModalOpen(false)
   setEnteredNotes('')
  }

  deleteNotes = (notesId)=>{
    setNotesArray(notesArray=>{ return notesArray.filter((notes)=> notes.id !==notesId)})
  }

  openModalHandler = ()=>{
    setModalOpen(true);
  }
  return (
    <View style={styles.screen}>
      <Button  onPress={openModalHandler} title="Add New Notes"/>
     <NotesInput modalOpen={modalOpen} enteredNotesHandler={enteredNotesHandler} enteredNotes={enteredNotes} addNotesHandler={addNotesHandler} />
      <FlatList keyExtractor={(item,index)=> item.id} data={notesArray} renderItem={(itemData)=><NotesItem onDelete={deleteNotes.bind(this, itemData.item.id) } value={itemData.item.value} />}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default App;
