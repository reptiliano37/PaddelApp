import React, { useState,useEffect,useRef } from 'react';
import { Animated,View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, SafeAreaView, FlatList,  Modal,Pressable, TouchableHighlight, Touchable} from 'react-native';

import styles from './training.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listPlayers, getTraining } from '../../graphql/queries'

import awsExports from "../../aws-exports";
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { createTraining,createPlayerTraining,updateTraining  } from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import {Timer} from 'react-native-element-timer';
Amplify.configure(awsExports);

let statistics =[
 {key:"ERROR NO FORZADO REVES"},
 {key:"ERROR NO FORZADO DERECHA"},
 {key:"ERROR VOLEA DERECHA"},
 {key:"ERROR FONDO DERECHA"},
 {key:"ERROR FONDO REVES"},
 {key:"ACIERTO VOLEA DERECHA"},
 {key:"ACIERTO VOLEA REVES"},
 {key:"ACIERTO REMATE X3"},
 {key:"WINNER"}
]


type TrainingProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Training">
}
function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? 'cyan' : '#6495ED' },
      ]}
    >
      <Text style={[
              styles.title,
              {color:selected ? 'black' : 'white'}]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Training({navigation}: TrainingProps) {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [players, setPlayers] = useState([])
  const [namePlayer, setNamePlayer] = useState('')
  const [names, setNames] = useState([])
  const [listInfoHitPlayers, setlistInfoHitPlayers] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonsVisible, setbuttonsVisible] = useState(false);
  const [selectedHit, setSelectedHit] = React.useState(new Map());
  const [modalVisibleStatistic, setModalVisibleStatistic] = useState(false);
  const [selected, setSelected] = React.useState(new Map());
  const timerRef = useRef(null);
  const [trainingIdentification, setTrainingIdentification] = useState('')
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: false
  }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 2000,
    useNativeDriver: false
  }).start();
  };

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );
  const onSelectHit = React.useCallback(
    id => {
      const newSelectedHit = new Map(selectedHit);
      newSelectedHit.set(id, !selectedHit.get(id));

      setSelectedHit(newSelectedHit);
    },
    [selected],
  );
  const Player = (props) => {
    // Create function to show players with image only if is string,  not object.
    if (typeof(props.name) === 'string'){
      
      if(props.index == 0){
        let namePlayerPressed = props.name
        return (
          <>
          <TouchableOpacity style={styles.playerButton1} onPress={()=> {showStatistics({namePlayerPressed})}}>
            <Image source={require("../../../assets/user-o.png")} style={styles.playerTraining}/>
            <Text style={{color:'white', fontWeight:'bold', width: 200,height:200,justifyContent:'center',textAlign: 'center'}}>{props.name}</Text>
          </TouchableOpacity>
          </>
        )
      }
      if(props.index == 1){
        let namePlayerPressed = props.name

        return (
          <>
          <TouchableOpacity style={styles.playerButton2} onPress={()=> {showStatistics({namePlayerPressed})}}>
            <Image source={require("../../../assets/user-o.png")} style={styles.playerTraining}/>
            <Text style={{color:'white', fontWeight:'bold', width: 200,height: 50,flex:1,justifyContent:'center',textAlign: 'center'}}>{props.name}</Text>
          </TouchableOpacity>
          </>
        )
      }
      if(props.index == 2){
        let namePlayerPressed = props.name

        return (
          <>
          <TouchableOpacity style={styles.playerButton3} onPress={()=> {showStatistics({namePlayerPressed})}}>
            <Image source={require("../../../assets/user-o.png")} style={styles.playerTraining}/>
            <Text style={{color:'white', fontWeight:'bold', width: 200,height: 50,flex:1,justifyContent:'center',textAlign: 'center'}}>{props.name}</Text>
          </TouchableOpacity>
          </>
        )
      }
      if(props.index == 3){
        let namePlayerPressed = props.name

        return (
          <>
          <TouchableOpacity style={styles.playerButton4} onPress={()=> {showStatistics({namePlayerPressed})}}>
            <Image source={require("../../../assets/user-o.png")} style={styles.playerTraining}/>
            <Text style={{color:'white', fontWeight:'bold', width: 200,height: 50,flex:1,justifyContent:'center',textAlign: 'center'}}>{props.name}</Text>
          </TouchableOpacity>
          </>
        )
      }
    }
    else{
      return(<></>)
    }
  }
  
  async function fetchPlayers() {
    try {
      const todoData = await API.graphql(graphqlOperation(listPlayers))
      const players = todoData["data"]["listPlayers"]["items"]
      setPlayers(players)
      setModalVisible(true)
    } catch (err) { console.log('error fetching todos',err) }
  }
  async function startTraining(selectedPlayers:Array<String>){
    
    selectedPlayers.forEach(async (element,index) => {
      const infoInitialTraining ={
        status: 'ACTIVO',
        trainer: user.username,
        owners: selectedPlayers,
        player: element,
      }
      try{
        const newTraining = await API.graphql({
          query:createTraining,
          variables: {input: infoInitialTraining},
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM})
        
        const infoPlayerTraining ={
          trainingID: newTraining["data"]["createTraining"]["id"],
          createdAt: newTraining["data"]["createTraining"]["createdAt"],
          playerUsername: newTraining["data"]["createTraining"]["player"],
          userUsername: newTraining["data"]["createTraining"]["trainer"],
          players: newTraining["data"]["createTraining"]["owners"]
        }
        const newPlayerTraining = await API.graphql({
          query:createPlayerTraining,
          variables: {input: infoPlayerTraining},
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM})
        // console.log(newPlayerTraining)

        let infoHitPlayer = {
          trainingID: newTraining["data"]["createTraining"]["id"],
          player: newTraining["data"]["createTraining"]["player"]
        }

        listInfoHitPlayers.push(infoHitPlayer)

      }catch(err){
        console.log('error fetching todos',err)
      }
    })
    return listInfoHitPlayers
  }

  async function updateStatistcs(selectedHit,name) {
    
    let hit = ''
    let hits = []
    let id =''
    selectedHit.forEach((element,index) => {
      hit = (index["key"].replaceAll(' ','_'))
    });
    console.log(name)
    listInfoHitPlayers.forEach((element, index) =>{
      if (element["player"] == name["namePlayerPressed"]){
        id = element["trainingID"]
      }
    })

    console.log(id)
    const trainingSession = await API.graphql({
      query:getTraining,
        variables: {id: id},
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM
    })
    hits = trainingSession["data"]["getTraining"]["hit"] || []
    hits.push(hit)
    console.log(trainingSession)
    const updateInfo = {
      id: id,
      hit: hits
    }
    console.log(updateInfo)
    try {
      const updateTrainingPlayer = await API.graphql({
        query:updateTraining,
        variables: {input: updateInfo},
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM})
    } catch (error) {
      console.log('error update',error)
    }
    
  }
  

async function showStatistics(name){
  // console.log(listInfoHitPlayers)
  console.log(name)
  setModalVisibleStatistic(true)
  setNamePlayer(name)
  // console.log(trainingIdentification)
  return name
}

  async function savePlayers(selectedPlayers:Map<String, boolean>){
    let namesPlayers = (Array.from( selectedPlayers, ([name, value]) => value ? (name) : [] ))
    namesPlayers.forEach((element,index) => {
      if(typeof(element) != 'string'){
        namesPlayers.splice(index,1)
      }
    });
    setNames(namesPlayers)
  }
  return (
    
    <View style={styles.container}>
        <ImageBackground source={require("../../../assets/fondo2.jpg")} resizeMode="cover" style={styles.image}>
          {/* <View style={{flex: 1,
                        alignItems: "center",
                        justifyContent: "center"}}> */}
            {/* <Animated.View
              style={[
                {
                  opacity: fadeAnim // Bind opacity to animated value
                }
              ]}
            >
              <Text style={styles.initialText}>Entrenamiento</Text>
            </Animated.View> */}
          {/* </View> */}
            <Modal
              animationType="slide"
              // transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <SafeAreaView style={styles.containerList}>
                <Title style={{marginLeft:5}}>Selecciona jugadores para unirse al entrenamiento:</Title>
                <FlatList
                  data={players}
                  renderItem={({ item }) => (
                    <Item
                      id={item.username}
                      title={item["username"]}
                      selected={!!selected.get(item.username)}
                      onSelect={onSelect}
                    />
                  )}
                  keyExtractor={(item) => item["username"]}
                  extraData={selected}
                />
                <Pressable
                    style={[styles.button]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      // startTraining(selected);
                      
                      savePlayers(selected);}}
                  >
                    <LinearGradient style={[styles.button]} colors={['#6495ED', 'cyan']} >
                      <Text style={styles.textStyle}>Listo</Text>
                    </LinearGradient>
                  </Pressable>
              </SafeAreaView>
            </Modal>
            <Modal 
              animationType="fade"
              visible={modalVisibleStatistic}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisibleStatistic(!modalVisibleStatistic);
              }}>
                <SafeAreaView style={styles.containerList}>
                <Title style={{marginLeft:5}}>Selecciona el golpe efectuado:</Title>
                <FlatList
                  data={statistics}
                  renderItem={({ item }) => (
                    <Item
                      id={item}
                      title={item.key}
                      selected={!!selectedHit.get(item)}
                      onSelect={onSelectHit}
                    />
                  )}
                  keyExtractor={(item) => item.key}
                  extraData={selectedHit}
                />
                <Pressable
                    style={[styles.button]}
                    onPress={() => {
                      setModalVisibleStatistic(!modalVisibleStatistic);
                      // console.log(selectedHit);
                      updateStatistcs(selectedHit,namePlayer)
                      // console.log(selectedHit);
                      selectedHit.clear();

                      // startTraining(selected);
                      // savePlayers(selected);
                    }}
                  >
                    <LinearGradient style={[styles.button]} colors={['#6495ED', 'cyan']} >
                      <Text style={styles.textStyle}>Listo</Text>
                    </LinearGradient>
                  </Pressable>
              </SafeAreaView>
            </Modal>
            {names ?
              <View style={{flex:2}}>
                {names.map((name,index) =>
                  <View style={styles.containerPlayer}>
                      <Player name={name} index={index}/>
                  </View>
                )}
              </View>
              :
              <>
              </>
            }
            <View style={{flex:1,flexDirection:'row',alignContent:'center'}}>
                {buttonsVisible ? (
                  <>
                    <TouchableOpacity style={styles.buttonTraining} onPress={() => 
                      { 
                        // startTraining(names);
                        listInfoHitPlayers.splice(0,listInfoHitPlayers.length);
                        setbuttonsVisible(false);
                        timerRef.current.stop();
                      }}>
                      <Image source={require("../../../assets/senal-de-stop.png")} style={styles.startTraining}/>
                    </TouchableOpacity>
                    <SafeAreaView style={styles.containerTimer}>
                      <View style={{flexDirection:'row',marginStart:-20,marginTop:120}}>
                        <Timer
                          ref={timerRef}
                          style={styles.timer}
                          textStyle={styles.timerText}
                          onTimes={e => {}}
                          onPause={e => {}}
                          onEnd={e => {}}
                        />
                      </View>
                      <View style={{flexDirection:'column',marginTop:-130,marginStart:20}}>
                        <TouchableOpacity
                          style={styles.buttonStart}
                          onPress={() => {
                              timerRef.current.start();
                          }}>
                            <Image source={require("../../../assets/power-o.png")} style={styles.buttonStart}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.buttonStart}
                          onPress={() => {
                              timerRef.current.pause();
                          }}>
                            <Image source={require("../../../assets/pause-o.png")} style={styles.buttonPause}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.buttonStart}
                          onPress={() => {
                              timerRef.current.resume();
                          }}>
                            <Image source={require("../../../assets/play-o.png")} style={styles.buttonResume}/>
                        </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </>
                ): 
                <>
                <TouchableOpacity style={styles.buttonTraining} onPress={()=>{fetchPlayers();
                fadeOut()}}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                      <Text style={{color:'white',fontWeight: "bold",fontSize:50}}>+</Text>
                      <Text style={{color:'white',fontWeight: "bold",fontSize:50,marginTop:-20}}>-</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTraining} onPress={() => 
                    { 
                      startTraining(names);
                      setbuttonsVisible(true);
                      
                    }}>
                  <Image source={require("../../../assets/tennis.png")} style={styles.startTraining}/>
                </TouchableOpacity>
              </>}
            </View>
        </ImageBackground>
     </View>
  );
}
