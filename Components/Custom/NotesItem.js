import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const NotesItem = (props)=>{
    return( <TouchableOpacity onPress={props.onDelete}><View style={styles.listItems} ><Text>{props.value}</Text></View></TouchableOpacity> )


}

const styles = StyleSheet.create({
    listItems:{
        padding:10,
        marginVertical: 10,
        backgroundColor:'#e0e0e0',
        borderColor:'black',
        borderWidth:1,
        borderRadius:5
      } 
})

export default NotesItem;