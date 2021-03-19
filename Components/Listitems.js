import { View,Text,StyleSheet,TouchableOpacity,FlatList} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../Json/Dataapp.json';
import React,{useEffect} from 'react';
const Listitems = ({route,navigation}) => {



      
    
   










// decreament function of qty
const addToCart = (item) => { 
   navigation.navigate('Item',item);
 } 
 
 //lougout btn function
const logoutfun = async () => {
     await AsyncStorage.clear();
     await navigation.navigate('Home');
    }
   
   
   //running
    return (
        <View>
             <TouchableOpacity onPress={ () => logoutfun()}>
            <View style={styles.boxbtnout}>
                <Text style={styles.btnout}>LogOut</Text>
            </View>
            </TouchableOpacity>
           <FlatList
           data={data.items}
          
           renderItem={ ({item}) => (
            <View style={styles.boxitem}>
                <Text style={styles.boxtitle}>{item.title}</Text>
                <Text style={styles.boxprice} >Price : ${item.price}</Text>
                <View style={styles.boxbtn}>
                        <Text style={styles.boxquantity} >Quantity : 1</Text>
                       

                        <TouchableOpacity style={styles.boxbtnadd} onPress={() => addToCart(item)}>
                            <View >
                                <Text style={styles.btnadd} >Details</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
      )}
      />
     
        </View>)
 
}

export default Listitems;


//styles
const styles = StyleSheet.create({
    boxitem : {
        backgroundColor : 'silver',
        borderRadius : 15,
        padding : 10,
        marginHorizontal : 10,
        marginTop:15,
    },
    boxtitle : {
        color : 'green',
        fontSize : 25,
        textAlign :'center',
        fontWeight :'bold'
    },
    boxprice : {
        color : 'green',
        fontSize : 20,
    },
    boxbtn : {
        flexDirection : 'row'
    },
    boxquantity : {
        fontSize : 20,
    },
    boxbtnadd : {
        right : 0,
        bottom : 2,
        position : 'absolute',
        backgroundColor : 'green',
        borderRadius:10
    },
    btnadd : {
        padding :6,
        fontWeight :'bold',
        color : 'white'
    },
    boxbtnout : {
        backgroundColor : 'red',
        borderRadius : 15,
        marginHorizontal : 10,
        marginTop:15, 
    },
    btnout : {
        color : 'white',
        fontSize : 25,
        textAlign :'center',
        fontWeight :'bold',
        padding : 10,
    }
   
     
  });