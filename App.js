import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Pokarangss from './screens/Pokarangss';
import Bhensaragss from './screens/Bhensaragss';
import Bonadagss from './screens/Bonadagss';
import Ekangss from './screens/Ekangss';
import Keraliyagss from './screens/Keraliyagss';
import Khinwjbasgss from './screens/Khinwjbasgss';
import Lathigss from './screens/Lathigss';
import Lohatagss from './screens/Lohatagss';
import Nananiyagss from './screens/Nananiyagss';
import Pratapuragss from './screens/Pratapuragss';
import Ramdevragss from './screens/Ramdevragss';
import Riicogss from './screens/Riicogss';
import Sankaragss from './screens/Sankaragss';
import Admin from './screens/Admin';
const Stack =createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Pokarangss" component={Pokarangss} />
    <Stack.Screen name="Bhensaragss" component={Bhensaragss}/>
    <Stack.Screen name="Bonadagss" component={Bonadagss}/>
    <Stack.Screen name="Ekangss" component={Ekangss}/>
    <Stack.Screen name='Keraliyagss' component={Keraliyagss}/>
  <Stack.Screen name='Khinwjbasgss' component={Khinwjbasgss}/>
<Stack.Screen name='Lathigss' component={Lathigss}/>
<Stack.Screen name='Lohatagss' component={Lohatagss}/>
  <Stack.Screen name='Nananiyagss' component={Nananiyagss}/>
  <Stack.Screen name='Pratapuragss' component={Pratapuragss}/>
 <Stack.Screen name='Ramdevragss' component={Ramdevragss}/>
 <Stack.Screen name='Riicogss' component={Riicogss}/>
 <Stack.Screen name='Sankaragss' component={Sankaragss}/>
 <Stack.Screen name='Admin' component={Admin}/>
   </Stack.Navigator>

    </NavigationContainer>
  );
}

