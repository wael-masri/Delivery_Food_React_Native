
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import data from '../Json/Dataapp.json';
const About = () => {
 
  
 
 
  return (
    <View  style={styles.body} >
      <FlatList
      data={data.about}
      renderItem={ ({item}) => (
        <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.body}</Text>
        </View>
      )}
      />
    </View>

  );
}
export default About
const styles = StyleSheet.create({
  container: {
    marginHorizontal : 15,
    marginTop : 20,
    marginBottom:20,
   
  },
  title : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'red',
    
   

  },
  body : {
    backgroundColor : 'black',
  },
  text : {
    fontFamily : 'serif',
    marginTop : 15,
    textAlign : 'justify',
    letterSpacing : 1,
    color : "white"
  }
});