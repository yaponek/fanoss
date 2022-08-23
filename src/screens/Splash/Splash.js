import React from 'react';
import {
  SafeAreaView, StyleSheet, View, Text, Image
} from 'react-native';
import Logo from '../../../assets/image/fano-tr.png';
import { useNavigation } from "@react-navigation/native";


const Splash = () => {
    
const navigation = useNavigation();

setTimeout(() => {
    navigation.navigate('SignIn');
}, 3000);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Image source={Logo} style={[styles.logo, {height: 500 * 0.12}]} />
            <Text style={styles.titleStyle}>
            Welcome Home!
            </Text>
            
        </View>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: '30%',
    maxWidth: '40%',
    height: '20',
  }, 
});

export default Splash;