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

import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import AppointmentPicker from 'appointment-picker';
import Animbutton from '../../components/animButon/animButton';
import { createDia, updatePista, updateDia } from '../../graphql/mutations';
import { getPista, getDia, listPistas, listDias } from '../../graphql/queries';
import { retry } from '@aws-amplify/core';

type BookingProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Booking">
}

const jsonHorasYmedia = { "slots" : {
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
const jsonHoras = { "slots" : {
  "slot1": "10:00 a 11:00",
  "slot2": "11:00 a 12:00",
  "slot3": "12:00 a 13:00",
  "slot4": "13:00 a 14:00",
  "slot5": "15:00 a 16:00",
  "slot6": "16:00 a 17:00",
  "slot7": "17:00 a 18:00",
  "slot8": "18:00 a 19:00",
  "slot9": "19:00 a 20:00",
  "slot10": "21:00 a 22:00",
  "slot11": "22:00 a 23:00",
  } 
}


export default function Booking({navigation}: BookingProps) {

  const { user } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const RootStack = createNativeStackNavigator();
  const [courts, setCourts] = useState([])
  const [days, setDays] = useState([])
  const [newDay, setNewDay] = useState({})
  const [players, setPlayers] = useState([])
  const [shouldShow, setShouldShow] = useState(true);
  const [hourChoice, setHourChoice] = useState(false);
  const HourButton = (props) => {
    return(
      <TouchableOpacity style={{marginTop:15} }onPress={()=>{
        setShouldShow(false)
        setHourChoice(true)
      }}>
        <LinearGradient colors={['cyan','#6495ED', '#6495ED']}
                    style={styles.button}>
          <Text style={styles.textButtonStyle}>1 hora </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
  const HourAndHalfButton = (props) => {
    return(
      <TouchableOpacity onPress={()=>{
        setShouldShow(false)
        setHourChoice(false)
      }}>
        <LinearGradient colors={['cyan','#6495ED', '#6495ED']}
                    style={styles.button}>
          <Text style={styles.textButtonStyle}>1 hora y media</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
  const VolverAtras = (props) =>{
    return(
    <View style={{marginBottom:70,margin:5}}>
                <TouchableOpacity
                                onPress={() => {
                                                setShouldShow(true)}}
                                style={[styles.atrasButton, {
                                    borderColor: 'cyan',
                                    borderWidth: 1
                                }]}
                            >
                                <Text style={[styles.textAtras, {
                                    color: 'cyan'
                                }]}>Volver a elegir tiempo de reserva</Text>
                            </TouchableOpacity>
                            </View>)
  }
    

  async function checkCourt(newDay, hour){
    console.log(newDay,hour)
    try {
      // Primero recorremos cada una de las pistas
      
      const respListCourts = await API.graphql({
        query:listPistas,
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM
      })
      const courts = respListCourts["data"]["listCourts"]["items"]
      setCourts(courts)
      courts.forEach(async element => {
        console.log(element)
        if (element["days"]["nextToken"] == null) {
          
          try {
            
            const updateInfo = {
              id: element["id"],
              courtNumber: element["courtNumber"],
              day: [newDay["dateString"]]
            }

            const updateDayInCourt = await API.graphql({
              query:updatePista,
              variables: {input: updateInfo},
              authMode: GRAPHQL_AUTH_MODE.AWS_IAM})
          } catch (error) {
            console.log('error update',error)
          }
        }
        })
  
    } catch (error) {
      //Error en el primer try-catch
      console.log('error fetching todos',error)
    }
  }
  
  function BookScreen({ navigation }) {
    const onDayPress: CalendarProps['onDayPress'] = async day => {
      setSelected(day.dateString);
    };

    async function checkDay(day){
      // Miramos en la tabla Day si existe el dia
      const dayInfo = {
        dateString: day["dateString"]
      }
      // let newDay = {}
      const respListDays = await API.graphql({
        query:listDias,
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM
      })
      let days = respListDays["data"]["listDays"]["items"]
      setDays(days)
      // Si la tabla de dias esta vacia creamos un nuevo dia
      if (days.length === 0){
          const newDay = await API.graphql({
          query:createDia,
          variables: {input: dayInfo},
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM})
          
          const selectedDay = {
            id: newDay["data"]["createDay"]["id"],
            dateString: newDay["data"]["createDay"]["dateString"]
          }
          setNewDay(selectedDay)
      }
      else{
        //Si no esta vacia metemos los days en una lista.
        let checkDaysList = []
        days.forEach(async elementDay => {
          checkDaysList.push(elementDay["dateString"])
        })
        
        //Si no esta vacia miramos si en la tabla existe el dia, si existe, lo devolvemos si no, lo creamos.
        if (checkDaysList.includes(day["dateString"])){
            const newDay = await API.graphql({
            query:getDia,
              variables: {dateString: day["dateString"]},
              authMode: GRAPHQL_AUTH_MODE.AWS_IAM
          })
          const selectedDay = {
            id: newDay["data"]["getDay"]["id"],
            dateString: newDay["data"]["getDay"]["dateString"]
          }
          setNewDay(selectedDay)
          
        }else{
            const newDay = await API.graphql({
            query:createDia,
            variables: {input: dayInfo},
            authMode: GRAPHQL_AUTH_MODE.AWS_IAM})

            const selectedDay = {
              id: newDay["data"]["createDay"]["id"],
              dateString: newDay["data"]["createDay"]["dateString"]
            }
            setNewDay(selectedDay)
        }
      }
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <LinearGradient
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    locations={[0,0.5,0.6]}
                    colors={['cyan','#6495ED', '#6495ED']}
                    style={{flex:1}}
                >
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
                    minDate={Date()}
                    maxDate={'2023-05-30'}
                    onDayPress={day =>{
                      onDayPress(day);
                      console.log(day);
                      checkDay(day);
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
                    monthFormat={'yyyy MM'}
                    onMonthChange={month => {
                      console.log('month changed', month);
                    }}
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
        
        <View style={styles.buttonSection}>
            <Pressable 
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                  <Image source={require("../../../assets/tennis-court.png")} style={styles.image}/>
                    <View style={styles.text_position}>
                      <Text style={styles.text_footer}>Reservar pista</Text>
                    </View>
          </Pressable>
        </View>
        </LinearGradient>
        </View>
    );
  }
  
  function HoraScreen({ navigation }) {

    let selectedDay = newDay
    const horasYmedia = jsonHorasYmedia.slots
    const horas = jsonHoras.slots

    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        {shouldShow ? (
          <SafeAreaView style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Title>¿Cuánto tiempo quieres reservar?</Title>
            <HourButton/>
            <HourAndHalfButton/>
            <View style={{marginBottom:70,margin:5}}>
                <TouchableOpacity
                                onPress={() => {navigation.goBack(BookScreen)}}
                                style={[styles.atrasButton, {
                                    borderColor: 'cyan',
                                    borderWidth: 1,
                                    marginTop:50
                                }]}
                            >
                                <Text style={[styles.textAtras, {
                                    color: 'cyan',
                                    marginLeft:20,
                                    marginRight:20
                                }]}>Volver a elegir el día</Text>
                            </TouchableOpacity>
                            </View>
          </SafeAreaView>
        ) : (
          <SafeAreaView>
            <Title style={{ fontSize: 20}}>Elige la hora para reservar pista:</Title>
            {hourChoice ? 
              <ScrollView>
                {Object.keys(horas).map( function(k) {
                  return (  <View key={k} style={{margin:5}}>
                              <LinearGradient style={[styles.buttonHour]} colors={['#6495ED', 'cyan']} >
                                <ButtonComponent title={horas[k]} style={styles.buttonHour} onPress={( ) =>{
                                  checkCourt(selectedDay,horas[k])
                                }}>

                              </ButtonComponent>
                              </LinearGradient>
                            </View>)
                })}
                  <VolverAtras/>
                </ScrollView>
                :
                <ScrollView>
                {Object.keys(horasYmedia).map( function(k) {
                  return (  <View key={k} style={{margin:5}}>
                              <LinearGradient style={[styles.buttonHour]} colors={['#6495ED', 'cyan']} >
                                <ButtonComponent title={horasYmedia[k]} style={styles.buttonHour} onPress={( ) =>{
                                  checkCourt(selectedDay,horasYmedia[k])
                                }}>

                              </ButtonComponent>
                              </LinearGradient>
                            </View>)
                })}
                  <VolverAtras/>
                </ScrollView>
              }
            
          </SafeAreaView>
        )}
      </View>
    );
  }
    
    return (

      <RootStack.Navigator>
        <RootStack.Group screenOptions={{headerShown:false}}>
          <RootStack.Screen name="Book" component={BookScreen}/>
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Hora" component={HoraScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    )
}

