import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Formsignup from '../Components/Formsignup';
const Signup = (props) => {
  return (
    <View style={styles.container}>
      <Formsignup  navigation={props.navigation} />
      
    </View>
  );
}
export default Signup
const styles = StyleSheet.create({
  container: {
   // marginHorizontal : 15,
   //marginTop : 20 ,
    backgroundColor :'black',
    flex :1
    
    
   
  },
});