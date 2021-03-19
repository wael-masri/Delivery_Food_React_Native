import React from "react";
import { View,Text,StyleSheet } from "react-native";


const Headerabout = (props) => {

//console.log(props);


    return(
        <View style={styles.header}>
    
       
      
      
        
             <Text 
             style={{fontWeight : "bold",fontSize:20,color:'#fff',left:65}}>{props.title}</Text>
        
       
   
   </View>)
}

export default Headerabout;

const styles = StyleSheet.create({
    header: {
     flex: 1,
      width : '100%',
      height : '100%',
      resizeMode: "cover",
     justifyContent: "center"
      
    },
   
     
  });