import React from 'react';
import {View, Image} from 'react-native';
import 'react-native-gesture-handler';
import Home from '../screens/Home/Home';
import deviceManager from '../screens/deviceManager';
import QrScanner from '../screens/QrScanner/QrScanner';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BalanceScreen from '../screens/BalanceSecreen/BalanceScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Font from 'react-native-vector-icons/FontAwesome';// 
import img from '../../assets/image/qr.png';

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#F9813A',
  secondary: '#fedac5',
  light: '#E5E5E5',
  grey: '#908e8c',
};

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        tabBarVisible="false"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan Device"
        component={QrScanner}
        options={{
          tabBarIcon: ({color}) => (
            
            // <Image source={img} style={ {height: '80%', width: '100%'}} />
            <Icon name="qr-code-scanner" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={deviceManager}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="admin-panel-settings" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Your Devices"
        component={BalanceScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="laptop" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;