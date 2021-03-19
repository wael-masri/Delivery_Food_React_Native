
import { View,Text,StyleSheet,TextInput,Alert,TouchableOpacity} from "react-native";
import React,{useState,useEffect} from 'react'
import { Formik  } from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Formsignin = ({navigation , route}) => {

 const [ client , setClient] = useState({})


 

// use effect function
useEffect(() => {
getData();
}, [])


// get data from storage
const getData = async () => {
  try {
     const jsonValue = await AsyncStorage.getItem('signup')
     const val2 =  JSON.parse(jsonValue);
     console.log("from storage",val2.fullname);
     setClient(val2);
    
  } catch(e) {
   return false
  }
}















//submit form sign in 
const handlesubmitform = (values , actions)  => {
  let formpassword = values.password.trim();
  let formeamil = values.email.trim(); 
  let istoggled = false;
  
     if((formpassword == client.password) && (formeamil == client.email)){
       istoggled = true;
     } 

 if(istoggled){
  navigation.navigate('Items');
 }else{
  Alert.alert('Oops!','The email and password not correct :(');
 }
 actions.resetForm();
}




  
  //validation for form 
const validate = Yup.object({
   
    email: Yup.string()
     
      .required('Required'),
   
    password: Yup.string()
     
      .required('Required')
    
 
  })  
    
    
    
    
    //running
    return (
        <View style={styles.container}>
             <Formik
             initialValues={ {email : "",password : "" } }
             onSubmit={(values,actions) => {handlesubmitform(values,actions) }}
              
             
            
            
             validationSchema={validate}  
             >
                  { (props) => (
                      <KeyboardAwareScrollView >
                           <View  >

                                <TextInput
                                placeholderTextColor="silver"
                                placeholder="Enter your email.."
                                style = {styles.input}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                                onBlur={props.handleBlur('email')}
                                
                                />
                                <Text style={styles.erro}>{props.touched.email && props.errors.email}</Text>

                                <TextInput
                                placeholder="******"
                                placeholderTextColor="silver" 
                                
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
                                          <Text style={styles.btnntext}>Login</Text>
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

export default Formsignin;



//styles
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'black',
    
  },
    input : {
       // borderWidth : 1,
        borderColor : "#ddd",
        padding : 10,
        fontSize : 18,
        borderRadius : 6,
        marginHorizontal: 15,
        borderBottomWidth: 2,
        borderBottomColor: 'green',
        marginTop : 15,
        color :'white'
 
    },
    erro : {
        textAlign : "center",
        color : "red"
    },
   
    btnn : {
        marginTop : 30,
        backgroundColor:'#C60505',
        marginHorizontal: 15,
        borderRadius : 15 ,
     
    },
    btnntext : {
        fontSize : 25 ,
        textAlign : 'center',
        padding : 10,
        fontWeight:'bold',
       color : 'white'

    },
});
