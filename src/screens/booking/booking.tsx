import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, TouchableOpacityBase, Pressable, Modal } from 'react-native';

import styles from './booking.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {API, Auth, graphqlOperation} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar, CalendarProps, Agenda } from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { listCourts, listPlayers } from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import AppointmentPicker from 'appointment-picker';
import Animbutton from '../../components/animButon/animButton';


type BookingProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Booking">
}

const jsonData = { "slots" : {
  "slot1": "10:00 a 11:30",
  "slot2": "11:30 a 13:00",
  "slot3": "13:00 a 14:30",
  "slot4": "14:30 a 16:00",
  "slot5": "16:00 a 17:30",
  "slot6": "17:30 a 19:00",
  "slot7": "19:00 a 20:30",
  "slot8": "20:30 a 22:00",
  "slot9": "22:00 a 23:00",
}
}


export default function Booking({navigation}: BookingProps) {

  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const RootStack = createNativeStackNavigator();
  const [courts, setCourts] = useState([])
  const [players, setPlayers] = useState([])
  
  function BookScreen({ navigation }) {
    const onDayPress: CalendarProps['onDayPress'] = async day => {
      setSelected(day.dateString);
    };

    async function checkDay(){
      
      try {
        // const fetchCourts = await API.graphql(graphqlOperation(listCourts))
        const resp = await API.graphql({
          query:listCourts,
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM
      })
      const courts = resp["data"]["listCourts"]["items"]
      setCourts(courts)
      console.log(courts)
    } catch (err) { 
      console.log('error fetching todos',err)
     }
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Modal
            style={{margin:0,flex:1}}
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
              <ScrollView style={styles.containerList}>
              {/* <View style={{ paddingTop: 50 }}> */}
              <Title>¿Qué dia quieres reservar pista?</Title>
                  <Calendar
                    // Initially visible month. Default = Date()
                  //   current={'2012-03-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2023-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={day =>{
                      onDayPress(day);
                      console.log(day);
                      checkDay();
                      
                      navigation.navigate('Hora')
                    }}
                    markedDates={{
                      [selected]: {
                        selected: true,
                        disableTouchEvent: true,
                        selectedColor: 'blue',
                        selectedTextColor: 'white'
                      }
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={month => {
                      console.log('month changed', month);
                    }}
                    // Hide month navigation arrows. Default = false
                  //   hideArrows={true}
                    // Do not show days of other months in month page. Default = false
                  //   hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                  //   disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    enableSwipeMonths={true}
                  />
                  <Pressable
                  style={styles.buttonModal}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textButtonModal}>Atrás</Text>
                </Pressable>
              </ScrollView>
          </Modal>
        
        <Pressable 
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
                <LinearGradient style={[styles.button]} colors={['#6495ED', 'cyan']} >
                      <Text style={styles.textStyle}>Reservar una pista</Text>
                </LinearGradient>
        </Pressable>
        </View>
    );
  }
  
  function ModalScreen({ navigation }) {
    const slots = jsonData.slots
    

    return (
      <SafeAreaView>
        <Title style={{ fontSize: 25}}>Elige la hora para reservar pista:</Title>
        {slots ? 
          <ScrollView>
            {Object.keys(slots).map( function(k) {
              return (  <View key={k} style={{margin:5}}>
                          <LinearGradient style={[styles.buttonHour]} colors={['#6495ED', 'cyan']} >
                            <ButtonComponent title={slots[k]} >

                          </ButtonComponent>
                          </LinearGradient>
                        </View>)
            })}
            </ScrollView>
            :
            <>
            </>
          }
        <Button onPress={() => {navigation.goBack();}} title="Atrás" />
      </SafeAreaView>
    );
  }
    
    return (

      <RootStack.Navigator>
        <RootStack.Group screenOptions={{headerShown:false}}>
          <RootStack.Screen name="Book" component={BookScreen}/>
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Hora" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    )
}

