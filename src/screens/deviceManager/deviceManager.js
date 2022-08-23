import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, useWindowDimensions, View, Image, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import SelectList from "react-native-dropdown-select-list";
import CustomInput from '../../components/CustomInput';
import BG_IMG from '../../../assets/image/rose-flower-bg.jpg';


const deviceManager = () => {

  const data = [
    {key:'Package 1', value:'Package 1'},
    {key:'Package 2', value:'Package 2'},
    {key:'Package 3', value:'Package 3'},
    {key:'Package 4', value:'Package 4'},
    {key:'Package 5', value:'Package 5'},
    {key:'Package 6', value:'Package 6'}
  ]
// const { height } = useWindowDimensions();
// const navigation = useNavigation();

  const [userName, setUserName ] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [UserRepeatPassword, setUserRepeatPassword] = useState('');
  const [userEmail, setUserEmail ] = useState('');
  const [UserGender, setUserGender] = useState('');

  const onSavePurchaseDetailPressed = () =>{
    console.info('Purchase Detail Pressed');
  }

  const onSaveDevicePressed = () =>{
    console.info('Save Device Pressed')
  }

  return (
    <ScrollView>
            <Image
                source={BG_IMG}
                style={StyleSheet.absoluteFillObject}
                blurRadius={50}
                />
      <View style={styles.root}>
        <Text style={styles.title}> Main Purchase Detail</Text>
        <Text style={styles.subTitle}> Package Detail's </Text>

        <View style={styles.selectBoxView}>
          <SelectList 
            data={data} 
            placeholder='Chose Package'
            setSelected={setUserGender} 
            size={100}
            boxStyles={styles.selectBox} 
            inputStyles={styles.inputStyles} 
            dropdownStyles={styles.dropDownStyles} 
            dropdownItemStyles={styles.dropDownItemStyles} 
          />
        </View>

        <CustomInput 
          placeholder='Package Price' 
          value={userName} 
          setValue={setUserName} 
          secureTextEntry={false} 
        />
        
        <CustomInput 
          placeholder='Package Time Interval' 
          value={userEmail} 
          setValue={setUserEmail} 
          secureTextEntry={false}
        />

        <CustomButton 
          text={'Save Purchase Detail'}
          onPress={onSavePurchaseDetailPressed}
          type={'PRIMARY'}
        />

        <Text style={styles.subTitle}> Device Key String </Text>

        <CustomInput 
          placeholder='Key String' 
          value={UserPassword} 
          setValue={setUserPassword} 
          secureTextEntry={true}
        />

        <CustomButton 
          text={'Save Device Detail'}
          onPress={onSaveDevicePressed}
          type={'PRIMARY'}
        />

      </View>
    </ScrollView>
  )
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
  subTitle:{
    fontSize: 18,
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

export default deviceManager