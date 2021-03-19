import React,{useState} from "react";
import { View,Text,StyleSheet,ScrollView, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import {FastImage} from 'react-native-fast-image';


const slider = (props) => {
    const [img , setImg] = useState({
        images : [
            require('../Images/slide1.jpg'),
            require('../Images/slide2.jpg'),
            require('../Images/slide3.jpg'),
            require('../Images/slide4.jpg') 

        ]
    })
    
   

        return(
            <View  style={styles.container} >
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View>
                        <SliderBox
                        ImageComponent={FastImage}
                        images={img.images}
                        sliderBoxHeight={400}
                        
                        dotColor="black"
                        inactiveDotColor="red"
                        paginationBoxVerticalPadding={20}
                        
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        paginationBoxStyle={{
                        position: "absolute",
                        bottom: 0,
                        padding: 0,
                        
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 10
                        }}
                        dotStyle={{
                        width: 40,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin : 0,
                        backgroundColor: "red"
                        }}
                        ImageComponentStyle={{borderRadius: 15, width: '70%', marginTop: 5,}}
                        imageLoadingColor="red"
                        />
                    </View>
                    <View style={styles.form}>
                         <TouchableOpacity onPress={() => props.navigation.navigate('Signin')} >
                        <View style={styles.btnn}>
                            <Text style={styles.btnntext}>Sign In</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                        <View style={styles.btnn}>
                             <Text style={styles.btnntext}>Sign Up</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

           
           
        )
      
    }
  export default slider ;

  const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
       // marginHorizontal: 16,
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
          color : 'white'

      },
      form : {
          marginTop : 20
      }
  });



