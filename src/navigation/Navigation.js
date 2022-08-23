import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Home from '../screens/Home/Home';
import BottomNavigator from './BottomNavigator';
import Splash from '../screens/Splash/Splash';
import ForgotenPassword from '../screens/ForgotenPassword';


const Stack  = createNativeStackNavigator(); 

const Navigation = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
              {/* <Stack.Screen name="Splash" component={Splash} /> */}
              <Stack.Screen name="Naigator" component={BottomNavigator} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="Forgotten" component={ForgotenPassword} />
         </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;