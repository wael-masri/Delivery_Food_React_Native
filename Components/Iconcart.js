import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { connect} from 'react-redux';
const Iconcart = (props) => {

//console.log(props);


    return(
    <View style={styles.header}>
       
        <Entypo 
        name="shop" 
        onPress={() => props.navigation.navigate('Cart')}
        size={42} 
        color="black" 
        style={{position : "absolute",right: 2,top:-3,color:'white'}} />
        <Text  onPress={() => props.navigation.navigate('Cart')} style={{position:'absolute',right:18,top:12,fontWeight:'bold',color:'white'}}>{props.quantity}</Text>
       
        <View >
             <Text 
             style={{fontWeight : "bold",fontSize:20,color:'white'}}>{props.title}</Text>
        </View>
       
    </View>)
}

export default connect((state) => {
    
  return { quantity: state.items.cart.reduce((total, item) => total + parseInt(item.quantity) , 0)}
 
 } )(Iconcart)

const styles = StyleSheet.create({
    header: {
      flex: 1,
      //justifyContent: "center",
      //alignItems: "center",
      flexDirection: "row",
      width : "100%",
      height : "100%",
      
    }
     
  });