import React, { useState,useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, SafeAreaView, FlatList,  Modal,Pressable} from 'react-native';

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

export default function Training({navigation}: TrainingProps) {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [players, setPlayers] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  // const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = React.useState(new Map());
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
  
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../../../assets/fondo2.jpg")} resizeMode="cover" style={styles.image}>
          <View>
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
                      id={item.id}
                      title={item["username"]}
                      selected={!!selected.get(item.id)}
                      onSelect={onSelect}
                    />
                  )}
                  keyExtractor={(item) => item["username"]}
                  extraData={selected}
                />
                <Pressable
                    style={[styles.button]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <LinearGradient style={[styles.button]} colors={['#6495ED', 'cyan']} >
                      <Text style={styles.textStyle}>Listo</Text>
                    </LinearGradient>
                   
                  </Pressable>
              </SafeAreaView>
            </Modal>
              <View style={{flexDirection:'row',alignContent:'center'}}>
                <TouchableOpacity style={styles.buttonTraining} onPress={()=>{fetchPlayers()}}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                      <Text style={{color:'white',fontWeight: "bold",fontSize:50}}>+</Text>
                      <Text style={{color:'white',fontWeight: "bold",fontSize:50,marginTop:-20}}>-</Text>
                      {/* <Text style={{color:'white',fontWeight: "bold",marginTop:10}}>Añadir jugadores</Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTraining}>
                  <Image source={require("../../../assets/tennis.png")} style={styles.startTraining}/>
                </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
     </View>
  );
}
