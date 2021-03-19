import React from "react";
import { View,Text,StyleSheet,ImageBackground } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

const Iconabout = (props) => {

//console.log(props);


    return(
    <View style={styles.header}>
           
        <Entypo 
        name="book" 
        onPress={() => props.navigation.navigate('About')}
        size={35} 
        color="black" 
        style={{position : "absolute",right: 2,color :'white'}} />
      
        <View >
             <Text 
             style={{fontWeight : "bold",fontSize:25,color :'white'}}>{props.title}</Text>
        </View>
       
    </View>)
}

export default Iconabout;

const styles = StyleSheet.create({
    header: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
       width : "100%",
       height : "100%",
      
    },
    
     
  });