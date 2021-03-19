import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Listitems from '../Components/Listitems';
const Items = (props) => {
  return (
    <View style={styles.container}>
    <Listitems navigation={props.navigation} route={props.route} />
      
    </View>
  );
}
export default Items
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
});