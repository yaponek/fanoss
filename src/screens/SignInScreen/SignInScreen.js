import React, {useState} from "react";
import { StyleSheet, useWindowDimensions, View, Image, ScrollView} from 'react-native';
import Logo from '../../../assets/image/fanos_tr.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input/input";




const SignInScreen = ()=> {

  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [userName, setUserName ] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [errors, setErrors] = React.useState({});

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {

    var Email = userName;
    var Password = UserPassword;

    // console.warn('User Name is:',Email);
    if ((Email.length==0) || (Password.length==0)){
      console.warn("Required Field Is Missing!");
      alert("Required Field Is Missing!");
    }else{

      var Data ={
        Email: Email,
        Password: Password
      };

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      // fetch("http://fanosgroup.com/react-api/login.php",{
      fetch("http://127.0.0.1/oldlab/re_credit_ms/react-api/login.php",{
        method: 'POST',
        // mode: 'no-cors',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Logged In Successfully") {
          // console.warn('Logged In Successfully');
          navigation.navigate('Naigator');
          
          // this.props.navigation.navigate("HomePage");
        }
      })
      .catch((error)=>{console.error("ERROR:" + error);})
    }
  }

  const onForgottenPasswordPressed = () => {
    // console.warn('Forgotten Password Button is Pressed');
    navigation.navigate('Forgotten');
  }
  const onSignInFacebookPressed = () => {
    console.warn('SignIn with Facebook Button is Pressed');
  }
  const onSignInGooglePressed = () => {
    console.warn('SignIn with Google Button is Pressed');
  }

  const onCreateAccountPressed = () => {
    // console.warn(' Sign up Button is Pressed');
    navigation.navigate('SignUp');
  }

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  
  return ( 
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
        
        <CustomInput 
          placeholder='User Name' 
          value={userName} 
          setValue={setUserName} 
          secureTextEntry={false} 
        />

          {/* <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          /> */}

        <CustomInput 
          placeholder='Password' 
          value={UserPassword} 
          setValue={setUserPassword} 
          secureTextEntry={true}
        />

        <CustomButton 
          text={'Sign in'}
          onPress={onSignInPressed}
          type={'PRIMARY'}
        />

        <CustomButton 
          text={'Forgotten Password?'}
          onPress={onForgottenPasswordPressed}
          type={'TERTIARY'}
        />


        <CustomButton 
          text={'Sign in with Facebook?'}
          onPress={onSignInFacebookPressed}
          bgColor={'#E7EAF4'}
          fgColor={'#4765A9'}
        />
        <CustomButton 
          text={'Sign in with Google?'}
          onPress={onSignInGooglePressed}
          bgColor={'#FAE9EA'}
          fgColor={'#DD4D44'}
        />        
        <CustomButton 
          text={'Don\'t Have an Account?'}
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
    width: '70%',
    maxWidth: '50%',
    height: 100,
  }, 
});

export default SignInScreen