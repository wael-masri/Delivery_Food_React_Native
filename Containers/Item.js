import { View,Text,StyleSheet,TouchableOpacity,FlatList} from "react-native";
import {addToCart} from '../Reducers/Reduceritemsaction';
import {connect} from 'react-redux';

import React,{useState} from 'react'

const Listitems = (props) => {
 //qantity  
const [ qty , setQty] = useState(1)   
   
// increamnet function of qty
const inc = () => {
   let newqty = qty + 1 ;
    setQty(newqty);
} 

// decreament function of qty
const dec = () => {
    if(qty > 1){
        let newqty = qty - 1 ;
        setQty(newqty);
    }
    
 } 

//add to cart function
var istrue = false ;
const added = (product,qty) => {
    props.cartItemscheck.map(item2 => {
        if( item2.product.title === props.route.params.title ){
             istrue = true ;
        } 
        
        
  })

  if(istrue){
    console.log("not added");
}else{
    console.log(" added");
    props.addToCart(product,qty);
  istrue = false ;
}






      
     
   }
 


   
   
   
   //running
    return (
        <View style={{backgroundColor:'black',flex:1}}>
         
            <View style={styles.boxitem}>
                <Text style={styles.boxtitle}> {props.route.params.title} </Text>
                <Text style={styles.boxprice} > Price : ${props.route.params.price} </Text>
                <View style={styles.boxbtn}>
                        <Text style={styles.boxquantity} > Quantity :{qty}</Text>
                        <TouchableOpacity onPress={inc}>
                            <View  style={styles.btnincdecbox} >
                                <Text style={styles.btnincdec} >+</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={dec}>
                            <View style={styles.btnincdecbox} >
                                <Text style={styles.btnincdec} >-</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boxbtnadd}  onPress={() => added(props.route.params,qty)}>
                            <View >
                                <Text style={styles.btnadd}  >Add To Cart</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
     
     
        </View>)
 
}

export default connect((state) => {
    return{
        cartItemscheck: state.items.cart
    }
},{addToCart})(Listitems);


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
    btnincdecbox : {
        backgroundColor : 'red',
        marginLeft :10,
        borderRadius : 20,
        width:40,

    },
    btnincdec : {
        fontSize : 20,
        padding : 5,
        textAlign : 'center',
        color : 'white'

        
    }
     
  });