import React, {useState} from "react";
import { 
    StatusBar, 
    Modal, 
    Pressable, 
    FlatList, 
    Image, 
    Animated, 
    Text, 
    View, 
    Dimensions, 
    StyleSheet, 
    TouchableOpacity, 
    Easing, 
    SafeAreaViewBase, 
    SafeAreaView } from 'react-native';
import BG_IMG from '../../../assets/image/rose-flower-bg.jpg';
import balanceImg from '../../../assets/image/CheckedRad.png'
import RoundButton from '../../components/RoundButton/RoundButton';
import CustomInput from '../../components/CustomInput';
import { faker } from '@faker-js/faker';
import moment from 'moment';
import "../../../global";
// import DataGenerator from '../../method/DataGenerator/DataGenerator';



const { width, height } = Dimensions.get('screen');


function randomProfile() {
    return {
        key: faker.datatype.uuid(),
        name: faker.commerce.price(10, 500, 2, 'Birr '),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        purchaseDate: faker.date.past(),
        jobTitle: faker.name.jobTitle(),
    }
}

const profile = function (max_size) {
    const  users = [];
    for (let index = 0; index < max_size; index++) {
        users.push(randomProfile());
    }
    return users;
};

const userTransaction = function (limit){
    
      var userId = userDetail.userId;

      var Data ={
        userId: userId,
        limit: limit
      };

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      // fetch("http://fanosgroup.com/react-api/login.php",{
      fetch("http://127.0.0.1/oldlab/re_credit_ms/react-api/credit-history.php",{
        method: 'POST',
        // mode: 'no-cors',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        // alert(Response[0])
        // if (Response[0].Message == "Logged In Successfully") {
          console.warn('Log Result',Response);
        //   navigation.navigate('Naigator');
          // this.props.navigation.navigate("HomePage");
        // }
      })
      .catch((error)=>{console.error("ERROR:" + error);})
}

userTransaction(150)

const users_group = profile(150);
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 7;


const Home = () => {
    
    const scrollY = React.useRef(new Animated.Value(0)).current;

    const [modalVisible, setModalVisible] = useState(false);
    const [userName, setUserName ] = useState('');
    const [userEmail, setUserEmail] = useState('');
    
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            {/* <StatusBar hidden/> */}
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
                        <Image 
                            source={balanceImg} 
                            style={{
                                width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                marginRight:  SPACING/2   
                            }} 
                        />
                        <View>
                            <Text style={{fontSize:22, fontWeight: '700'}}><Text style={styles.miniTitle}>Price:</Text> {item.name}</Text>
                            <Text style={{fontSize:18, fontWeight: .7,}}><Text style={styles.miniTitle}>Type:</Text> purchase: [12431]</Text>
                            <Text>
                                <Text style={{fontSize:15, fontWeight: .7, color: '0099cc'}}>
                                    State: pending
                                </Text>
                                <Text style={{fontSize:12, fontWeight: .8,marginLeft: '30%', color: '0099cc'}}>
                                    {moment(item.purchaseDate).format('YYYY-MM-DD')}
                                </Text>
                            </Text>
                        </View>
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
            
            <Text> Purchase more service </Text>
            <CustomInput 
          placeholder='Recept File' 
          value={userName} 
          setValue={setUserName} 
          secureTextEntry={false} 
        />
        
        <CustomInput 
          placeholder=' Amount of Money' 
          value={userEmail} 
          setValue={setUserEmail} 
          secureTextEntry={false}
        />

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(false)}
            ><Text>Close</Text></Pressable>
          </View>
        </View>
      </Modal>


        
        <RoundButton
                onPress={() => setModalVisible(true)}
                // type={'TERTIARY'}
                bgColor={'#fff'}
                iconColor={'#F9813A'}
                iconName={'upload-file'}
                iconSize={26}
            />
        </View>
  )
}

const styles = { 
    miniTitle: {
        fontWeight: '300',
    },
    miniTitle2: {
        // textAlign: 'right',
        fontWeight: '200',
    },
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
}

export default Home