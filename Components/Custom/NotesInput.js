import React from 'react';
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native';
const NotesInput = (props) => {

  return (
    <Modal visible={props.modalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter your Notes' onChangeText={props.enteredNotesHandler} value={props.enteredNotes} />
        <Button onPress={props.addNotesHandler} title='ADD' />
      </View> 
      </Modal>)

}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: 'center'
  }
  ,
  input: {
    width: '80%', padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom:10
  }
})

export default NotesInput;