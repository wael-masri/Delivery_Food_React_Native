import  React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

//pages
import Home   from   '../Containers/Home';
import About  from   '../Containers/About';
import Cart   from   '../Containers/Cart';
import Items  from   '../Containers/Items';
import Signin from   '../Containers/Signin';
import Signup from   '../Containers/Signup';
import Item   from   '../Containers/Item';
import Iconabout from '../Components/Iconabout';
import Iconcart from '../Components/Iconcart';
import Headerabout from '../Components/Headerabout';


const Stack = createStackNavigator();

const Stacknav = (props) => {



  return (
    
      <Stack.Navigator initialRouteName="Home">
      
        <Stack.Screen name="Home" component={Home} 
         options={({ navigation, route }) => ({
          headerTitle: props => <Iconabout navigation={navigation} title='welcom' />,
          headerStyle: {
            backgroundColor: 'red',
            
          },
        })} />
         
    

           
          <Stack.Screen name="About" component={About}  
            options={({ navigation, route }) => ({
          headerTitle: props => <Headerabout navigation={navigation} title='About Us' />,
          headerStyle: {
            backgroundColor: 'red',
            
          },
          })}  />

          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart',
          headerStyle: {
            backgroundColor: 'red',
            
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },}} />

         

          <Stack.Screen name="Items" component={Items} 
           options={({ navigation, route }) => ({
            headerTitle: props => <Iconcart navigation={navigation} title='Items' />,
            headerStyle: {
              backgroundColor: 'red',
              
            },
            headerTintColor: 'white',
          })} />

          <Stack.Screen name="Item" component={Item} options={{ title: 'Item',
          headerStyle: {
            backgroundColor: 'red',
            
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },}} />

          <Stack.Screen name="Signin" component={Signin} 
           options={{ title: 'Sign In',
          headerStyle: {
            backgroundColor: 'red',
            
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },}} />

         <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign Up',
          headerStyle: {
            backgroundColor: 'red',
            
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },}} />

         
      </Stack.Navigator>

      
  
  );
}

export default Stacknav;