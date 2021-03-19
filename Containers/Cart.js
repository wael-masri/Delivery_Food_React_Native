
import { View,Text,StyleSheet,TouchableOpacity,FlatList} from "react-native";
import {clearToCart} from '../Reducers/Reduceritemsaction';
import {connect} from 'react-redux';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Listitems = (props) => {

   
//lougout btn function
const logoutfun = async () => {
    await AsyncStorage.clear();
    
    await props.navigation.navigate('Home');

}


   
   
   
   //running
    return (
        <View style={{backgroundColor:'black',flex:1}}>
            <TouchableOpacity onPress={ () => logoutfun()}>
             <View style={styles.boxbtnout} >
                <Text style={styles.btnout}>LogOut</Text>
            </View>
            </TouchableOpacity>
         <View>
          <Text style={styles.totalprice}>Price Total :${props.total}</Text>
         </View>
         <TouchableOpacity style={styles.boxbtnorder} onPress={props.clearToCart}>
         <View >
          <Text style={styles.btnorder} >Place Order</Text>
         </View>
         </TouchableOpacity>
        <FlatList
        data={props.cartItems}
        keyExtractor={(ite) => ite.product.key}
        renderItem={({item}) => (
            <View style={styles.boxitem}>
            <Text style={styles.boxtitle}> {item.product.title} </Text>
            <Text style={styles.boxprice} > Price : ${item.product.price} </Text>
            <View style={styles.boxbtn}>
                    <Text style={styles.boxquantity} > Quantity : {item.quantity}</Text>
                  
            </View>
        </View>


        )}


       />


           
     
     
        </View>)
 
}




export default  connect((state) => {
 
    return{  cartItems: state.items.cart,
          total: state.items.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    }
      },{clearToCart})(Listitems)





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
   
    totalprice : {
        fontWeight : 'bold',
        padding : 10,
        color : 'green',
        fontSize : 25,
    },
    btnorder : {
       color : 'white',
       padding : 10,
       fontSize : 25,
       fontWeight : 'bold',
       textAlign : 'center'
    },
    boxbtnorder : {
        backgroundColor: 'red',
        width : 200,
        marginHorizontal : 10,
        borderRadius : 10
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