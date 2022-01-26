import React, { useState,useEffect,useRef } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, SafeAreaView, FlatList,  Modal,Pressable, TouchableHighlight, Touchable} from 'react-native';

import styles from './training.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listPlayers } from '../../graphql/queries'

import awsExports from "../../aws-exports";
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { createTraining } from '../../graphql/mutations';
import { createPlayerTraining } from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import {Timer} from 'react-native-element-timer';
Amplify.configure(awsExports);


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


const Player = (props) => {
  // Create function to show players with image only if is string,  not object.
  if (typeof(props.name) === 'string'){
    if(props.index == 0){
      return (
        <>
        <TouchableOpacity style={{flex:1,marginTop:250,alignItems:'center',height: 100,width: 100,flexDirection:'column',justifyContent:'center'}}>
          <Image source={require("../../../assets/user-o.png")} style={styles.playerTraining}/>
          <Text style={{color:'white', fontWeight:'bold', width: 200,height:200,justifyContent:'center',textAlign: 'center'}}>{props.name}</Text>
        </TouchableOpacity>
        </>
      )
    }
    if(props.index == 1){
      return (
        <>
        <TouchableOpacity style={{marginStart:210, marginTop:-130,alignItems:'center',height: 100,width: 100,flexDirection:'column',justifyContent:'center'}}>
          <Image source={require("../../../assets/user-o.png")} style={styles.playerTraining}/>
          <Text style={{color:'white', fontWeight:'bold', width: 200,height: 50,flex:1,justifyContent:'center',textAlign: 'center'}}>{props.name}</Text>
        </TouchableOpacity>
        </>
      )
    }
    if(props.index == 2){
      return (
        <>
        <TouchableOpacity style={{marginTop:90,alignItems:'center',height: 100,width: 100,justifyContent:'space-evenly'}}>
          <Image source={require("../../../assets/user-o.png")} style={styles.playerTraining}/>
          <Text style={{color:'white', fontWeight:'bold', width: 200,height: 50,flex:1,justifyContent:'center',textAlign: 'center'}}>{props.name}</Text>
        </TouchableOpacity>
        </>
      )
    }
    if(props.index == 3){
      return (
        <>
        <TouchableOpacity style={{marginStart:210,marginTop:-100,alignItems:'center',height: 100,width: 100,flexDirection:'column',justifyContent:'space-around'}}>
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

export default function Training({navigation}: TrainingProps) {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [players, setPlayers] = useState([])
  const [names, setNames] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonsVisible, setbuttonsVisible] = useState(false);
  // const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = React.useState(new Map());
  const timerRef = useRef(null);
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

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
        player: element
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
        console.log(newPlayerTraining)

      }catch(err){
        console.log('error fetching todos',err)
      }
    })

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
                <TouchableOpacity style={styles.buttonTraining} onPress={()=>{fetchPlayers()}}>
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
