import { View, Text, Modal, StyleSheet, Pressable, Image, Animated, Dimensions, } from 'react-native'
import React, { useState } from "react";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BG_IMG from '../../../assets/image/rose-flower-bg.jpg';
import balanceImg from '../../../assets/image/CheckedRad.png'
import RoundButton from '../../components/RoundButton/RoundButton';
import CustomButton from "../../components/CustomButton/CustomButton";
import { faker } from '@faker-js/faker';
import moment from 'moment';

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#F9813A',
  secondary: '#fedac5',
  light: '#E5E5E5',
  grey: '#908e8c',
};




function devices() {
    return [{
        key:1,
        name: 'abcd',
    },{
        key:2,
        name: 'MDZ20220000',
    }]
}

const users_group = devices();
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;



const BalanceScreen = () => {

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);

  const onDeletePressed = () =>{
    console.warn(' Delete Item Button is Pressed');
  }

  return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Image
                source={BG_IMG}
                style={StyleSheet.absoluteFillObject}
                blurRadius={50}
                />
            <Animated.FlatList 
                data={users_group}

                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: true }
                )}

                keyExtractor={item=> item.key}
                contentContainerStyle={{
                    padding: SPACING, paddingTop: statusbar.currentHeight || 42
                }}

                renderItem={({item, index}) => {
                    const inputRange = [
                        -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)
                    ]
                    const opacityInputRange = [
                        -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)
                    ]
                    const scale = scrollY.interpolate({
                        inputRange, outputRange: [1, 1, 1, 0 ]
                    });
                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange, outputRange: [1, 1, 1, 0 ]
                    });

                    return <Animated.View style={{
                            flexDirection: 'row', padding: SPACING, 
                            marginBottom: SPACING, shadowColor: "#000",
                            backgroundColor: 'rgba(255,255,255, 0.9)',
                            borderRadius: SPACING, overflow: 'hidden',
                            shadowOffset:{ width: 0, height: 10 },
                            shadowOpacity: .3, shadowRadius: 20,
                            opacity, transform:[{scale}], //flexWrap: "wrap",
                        }}>
                          <Icon name="laptop" style={{
                                width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                marginRight:  SPACING/2   
                            }} color={'#00ff00'} size={28} />
                        <View>
                            <Text style={{fontSize:22, fontWeight: '700'}}><Text style={styles.miniTitle}></Text> {item.name}</Text>
                            <br></br>
                            
                        </View>
                        <RoundButton
                          onPress={() => setModalVisible(true)}
                          type={'TERTIARY'}
                          bgColor={'#E7EAF4'}
                          iconColor={'#ff0000'}
                          iconName={'delete'}
                          iconSize={26}
                      /> 
                        

                    </Animated.View >
                }}
            />




      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Text> Hi </Text>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(false)}
            ><Text>Close</Text></Pressable>
          </View>
        </View>
      </Modal>


        
        <RoundButton
            onPress={() => setModalVisible(true)}
            type={'TERTIARY'}
            bgColor={'#E7EAF4'}
            iconColor={'#f9813a'}
            iconName={'add'}
            iconSize={26}
        />
    </View>
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default BalanceScreen;