import { Text, View, StyleSheet, Pressable } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const RoundButton = ({onPress, type, bgColor, iconColor, iconName, iconSize}) => {
    return (
        
      <Pressable 
        onPress={onPress}
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {},
        ]}>
        <Icon name={iconName} color={iconColor} size={iconSize} />
      </Pressable>
    );
  }

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#fff',
        borderColor: '#F9813A',
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    container_PRIMARY: {
        color: '#3B71F3',
    },
    container_TERTIARY: {
        color: '#0065ff',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {
        color: 'gray',
    },
})

export default RoundButton;