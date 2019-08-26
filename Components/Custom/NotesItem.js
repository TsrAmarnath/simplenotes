import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const NotesItem = (props)=>{
    return(<View style={styles.listItems} ><Text>{props.value}</Text></View>)


}

const styles = StyleSheet.create({
    listItems:{
        padding:10,
        marginVertical: 10,
        backgroundColor:'gray',
        borderColor:'black',
        borderWidth:1,
        borderRadius:5
      } 
})

export default NotesItem;