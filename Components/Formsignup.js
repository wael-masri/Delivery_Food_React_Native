
import { View,Text,StyleSheet,TextInput,Button,TouchableOpacity} from "react-native";
import React,{useState} from 'react'
import { Formik  } from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Formsignup = ({navigation}) => {
    
  //validation for form 
const validate = Yup.object({
   
    fullname: Yup.string()
      .matches(/[a-z]/, "Must be only digits")
      .min(3,"Min is 3 characters")
      .required('Required'),
   
    address: Yup.string()
      .matches(/[a-z]/, "Must be only digits")
      .min(10,"Min is 10 characters")
      .required('Required'),
    
    // dateofbirth: Yup.string()
    
    //   .required('Required'),
   
    phone: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, "Must be only characters"),
   
    
   
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
   
    password: Yup.string()
      
      .required('Required')
 
  })  
    
   //store data in asynstorage
   const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(jsonValue);
      await AsyncStorage.setItem('signup', jsonValue)
    } catch (e) {
      console.log(e);
    }
  }



   //submit sign up 
   const submitFormSignup = (values,actions) => {
     console.log(values);
     storeData(values);
     navigation.navigate('Signin');
     actions.resetForm();
   }




    
    
    //running
    return (
        <View style={styles.container}>
             <Formik
             initialValues={ {fullname : '' , address : '',phone : '',email : '',password : '' } }
             onSubmit={(values,actions) => {
              submitFormSignup(values,actions)
            
             }}
             validationSchema={validate}  
             >
                  { (props) => (
                      <KeyboardAwareScrollView >
                           <View>

                                <TextInput
                                placeholderTextColor="white"
                                placeholder="Full Name.."
                                style = {styles.input}
                                onChangeText={props.handleChange('fullname')}
                                value={props.values.fullname}
                                onBlur={props.handleBlur('fullname')}
                                />
                                <Text style={styles.erro}>{props.touched.fullname && props.errors.fullname}</Text>

                                <TextInput
                                placeholderTextColor="white"
                                placeholder="Address.."
                                style = {styles.input}
                                onChangeText={props.handleChange('address')}
                                value={props.values.address}
                                multiline
                                onBlur={props.handleBlur('address')}
                                />
                                <Text style={styles.erro}>{props.touched.address && props.errors.address}</Text>
                                
                                {/*code date*/}
                                {/* <Text style={styles.erro}>{props.touched.dateofbirth && props.errors.dateofbirth}</Text>  */}

                                <TextInput
                                placeholderTextColor="white"
                                placeholder="Phone.."
                                keyboardType="numeric"
                                style = {styles.input}
                                onChangeText={props.handleChange('phone')}
                                value={props.values.phone}
                                onBlur={props.handleBlur('phone')}
                                />
                                <Text style={styles.erro}>{props.touched.phone && props.errors.phone}</Text>

                                <TextInput
                                placeholderTextColor="white"
                                placeholder="Email.."
                                style = {styles.input}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                                onBlur={props.handleBlur('email')}
                                />
                                <Text style={styles.erro}>{props.touched.email && props.errors.email}</Text>

                                <TextInput
                                placeholderTextColor="white"
                                placeholder="******"
                                style = {styles.input}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                                secureTextEntry={true}
                                
                                onBlur={props.handleBlur('password')}
                                />
                                <Text style={styles.erro}>{props.touched.password && props.errors.password}</Text>
                                

                                <View >
                                    <TouchableOpacity onPress={props.handleSubmit} >
                                    <View style={styles.btnn}>
                                        <Text style={styles.btnntext}>Sign Up</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                    <View style={styles.btnn}>
                                        <Text style={styles.btnntext}>Cancel</Text>
                                    </View>
                                    </TouchableOpacity>
                                 </View>
                             </View>
                      </KeyboardAwareScrollView>    
                     )}
            </Formik>

        </View>
    )
}

export default Formsignup;

const styles = StyleSheet.create({
    input : {
       // borderWidth : 1,
        borderColor : "#ddd",
        padding : 10,
        fontSize : 18,
        borderRadius : 6,
        borderBottomColor: 'green',
        borderBottomWidth: 2,
        marginTop : 15,
        color : 'white'
 
    },
    erro : {
        textAlign : "center",
        color : "red"
    },
    buttons : {
        flexDirection: 'row',
        
    },
    btnn : {
      marginTop : 30,
      backgroundColor:'#C60505',
      marginHorizontal: 25,
      borderRadius : 15 ,
     
    },
    btnntext : {
      fontSize : 25 ,
      textAlign : 'center',
      padding : 10,
      fontWeight:'bold',
      color:'white'

  },
  container:{
   
    marginHorizontal : 15,
   marginTop : 20 ,
  }
   });
