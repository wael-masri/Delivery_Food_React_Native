
import React,{useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './Store/Index';
//pages
import Stacknav from './Navigation/stacknav';


export default function App() {










  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stacknav />
    </NavigationContainer>
    </Provider>
  );
}


