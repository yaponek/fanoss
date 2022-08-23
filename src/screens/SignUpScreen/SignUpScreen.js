import React, {useState} from "react";
import { StyleSheet, Text, useWindowDimensions, View, Image, ScrollView} from 'react-native';
import Logo from '../../../assets/image/fano-tr.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SelectList from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {

  const [userName, setUserName ] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [UserRepeatPassword, setUserRepeatPassword] = useState('');
  const [userEmail, setUserEmail ] = useState('');
  const [UserGender, setUserGender] = useState('');


  const data = [
    {key:'male', value:'Male'},
    {key:'female', value:'Female'}
  ]

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignUpPressed = () => {

    console.warn('Register Button is Pressed');

    if ((userName.length==0) || (UserGender.length==0)|| (userEmail.length==0) || (UserPassword.length==0) || (UserRepeatPassword.length==0)){
      console.warn("Required Field Is Missing!");
    }else if(UserPassword != UserRepeatPassword){
      console.warn("Password Don't Match!");
    }else{

      var Data ={
        name: userName,
        email: userEmail,
        gender: UserGender,
        Password: UserPassword
      };

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      // fetch("http://fanosgroup.com/react-api/login.php",{
      fetch("http://127.0.0.1/oldlab/re_credit_ms/react-api/register.php",{
        method: 'POST',
        // mode: 'no-cors',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Logged In Successfully") {
          console.warn('Logged In Successfully');
          navigation.navigate('SignIn');
        }else{
          
        }
      })
      .catch((error)=>{console.error("ERROR:" + error);})
    }
  }

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed Button is Pressed');
  }

  const onSignUpFacebookPressed = () => {
    console.warn('SignUp with Facebook Button is Pressed');
  }

  const onSignUpGooglePressed = () => {
    console.warn('SignUp with Google Button is Pressed');
  }

  const onPrivacyPolicyPressed = () => {
    console.warn('onPrivacyPolicyPressed is Pressed');
  }

  const onHaveAccountPressed = () => {
    // console.warn(' Sign up Button is Pressed');
    navigation.navigate('SignIn');
  }

  
  return ( 
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.12}]} />

        <Text style={styles.title}> Sign Up</Text>

        <CustomInput 
          placeholder='Full User Name' 
          value={userName} 
          setValue={setUserName} 
          secureTextEntry={false} 
        />
        <View style={styles.selectBoxView}>
          <SelectList 
            data={data} 
            placeholder='Gender'
            setSelected={setUserGender} 
            size={100}
            boxStyles={styles.selectBox} 
            inputStyles={styles.inputStyles} 
            dropdownStyles={styles.dropDownStyles} 
            dropdownItemStyles={styles.dropDownItemStyles} 
          />
        </View>

        <CustomInput 
          placeholder='Email' 
          value={userEmail} 
          setValue={setUserEmail} 
          secureTextEntry={false}
        />

        <CustomInput 
          placeholder='Password' 
          value={UserPassword} 
          setValue={setUserPassword} 
          secureTextEntry={true}
        />

        <CustomInput 
          placeholder='Repeat Password' 
          value={UserRepeatPassword} 
          setValue={setUserRepeatPassword} 
          secureTextEntry={true}
        />

        <CustomButton 
          text={'Register'}
          onPress={onSignUpPressed}
          type={'PRIMARY'}
        />

        <Text style={styles.text}> By Registering, you confirm that you accept our 
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and 
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>privacy policy</Text> 
        </Text>


        <CustomButton 
          text={'Sign in with Facebook?'}
          onPress={onSignUpFacebookPressed}
          bgColor={'#E7EAF4'}
          fgColor={'#4765A9'}
        />
        <CustomButton 
          text={'Sign in with Google?'}
          onPress={onSignUpGooglePressed}
          bgColor={'#FAE9EA'}
          fgColor={'#DD4D44'}
        />
        
        <CustomButton 
          text={'Have an Account?'}
          onPress={onHaveAccountPressed}
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
    width: '30%',
    maxWidth: '40%',
    height: '20',
  }, 
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text:{
    maxWidth: '90%',
    color: 'gray',
    marginVertical: 10,
  },
  link:{
    color: '#FDB075'
  },
  selectBoxView:{
    backgroundColor: 'white',
    minWidth: '90%',
  },
  selectBox:{
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
      
  },
  inputStyles:{
    backgroundColor: 'white',
    minWidth: '100%',
    borderColor: '#fff',
    marginHorizontal: -5,
    color: 'gray',
  },
  dropDownStyles:{
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  dropDownItemStyles:{
    backgroundColor: 'white',
    width: '100%',
  }

});

export default SignUpScreen;