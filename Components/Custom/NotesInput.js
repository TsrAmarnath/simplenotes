import React from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';
const NotesInput = (props)=>{
    return( <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter your Notes' onChangeText={props.enteredNotesHandler}  value={props.enteredNotes} />
        <Button onPress={props.addNotesHandler} title='ADD' />
      </View>)
   
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
      }
      ,
      input: {
        width: '80%', padding: 10, borderColor: 'gray', borderWidth: 1
      }
})

export default NotesInput;