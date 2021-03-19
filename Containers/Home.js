
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Slider from '../Components/Slideshow'
const Home = (props) => {
  return (
    <View style={styles.container}>
     <Slider  navigation = {props.navigation}/>
    </View>
  );
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});