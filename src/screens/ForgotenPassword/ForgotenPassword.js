import React, {useState} from "react";
import { StyleSheet, useWindowDimensions, View, Image, ScrollView} from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Logo from '../../../assets/image/fanosTextOnly.png';




const SignInScreen = ()=> {

  const [userEmail, setUserEmail ] = useState('');
  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onRecoverPressed = () => {
    console.warn('SignIn with Google Button is Pressed');
  }

  const onCreateAccountPressed = () => {
    // console.warn(' Sign up Button is Pressed');
    navigation.navigate('SignIn');
  }
  
  return ( 
    <ScrollView>
      <View style={styles.root}>   
        <Image source={Logo} style={[styles.logo, {height: height * 0.2}]} />     
        <CustomInput 
          placeholder='User E-mail' 
          value={userEmail} 
          setValue={setUserEmail} 
          secureTextEntry={false} 
        />
        <CustomButton 
          text={'Send Me New Password'}
          onPress={onRecoverPressed}
          type={'PRIMARY'}
        />
        <CustomButton 
          text={'Back'}
          onPress={onCreateAccountPressed}
          type={'TERTIARY'}
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    maxWidth: '80%',
    height: 100,
  }, 
});

export default SignInScreen;