import { View, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry= {secureTextEntry}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        marginVertical: 5,
    },
    input:{
        padding: 15,
    },
});

export default CustomInput