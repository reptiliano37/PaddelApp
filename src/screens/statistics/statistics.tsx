import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, TouchableOpacityBase, Modal, TouchableHighlight } from 'react-native';

import styles from './statistics.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import {  getTraining, listTrainings } from '../../graphql/queries'
import awsExports from "../../aws-exports";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Title, ToggleButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

type StatisticsProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Statistics">
}
 

export default function Statistics({navigation}: StatisticsProps) {
    const { user } = useAuth();
    const [selected, setSelected] = React.useState(new Map());
    const [data, setTrainingSessions] = useState([])
    const [statisticsVar, setStatistics] = useState([])
    const [modalStatistics, setModalStatisctics] = useState(false);

    const toggleModalStatistics = async () => {
      setModalStatisctics(!modalStatistics);
    }

    const MyIcon =() => {
      return(<Icon name="dot-circle-o" size={20} color="cyan" />)
      
    }
    const onSelect = React.useCallback(
        
        id => {
          const newSelected = new Map(selected);
          newSelected.set(id, !selected.get(id));
          setSelected(newSelected);
          
        },
        [selected],
      );
    
    const ItemDivider = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#607D8B",
            }}
          />
        );
      // }
      // const getTrainingSession = (id) => {
        
      //   const found = data.find(element => (element["id"] === id))
      //   // setStatistics(found["hit"])
      //   console.log(found)
     
    }
    async function getSessionTraining(id) {
      let hits = []

      const trainingSession = await API.graphql({
        query:getTraining,
          variables: {id: id},
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM
      })

      hits = trainingSession["data"]["getTraining"]["hit"]
      setStatistics(hits)

      
    }
    

    function Item({ id, title,trainer,name,status,hit,onSelect }) {
      
     
      return (
        <TouchableOpacity
          onPress={() => {
            onSelect(id,title,hit);
            getSessionTraining(id)
            toggleModalStatistics()
            ;}}
          style={
            styles.buttonTraining}
        >
          <Title>Entrenamiento de {name}</Title>
          
          <Text style={
                  styles.dia}>Fecha: {title.split('T')[0]}</Text>
          <Text style={
                  styles.entrenador}>Entrenador: {trainer}</Text>
        </TouchableOpacity>
      );
    }
    const TrainingSession = () =>{
      console.log(statisticsVar)
      
      return(
        <Modal
          visible={modalStatistics}
          onRequestClose={() => setModalStatisctics(false)}>
          <View style={{
                flex: 0.5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}}>

                  <Title>SESIÓN DE ENTRENAMIENTO</Title>
          </View>
          <View style={{  flex:1.5,
                          flexDirection:'column'}}>
              <Text style={styles.golpes}>Errores y aciertos cometidos:</Text>
              <ScrollView>
              { statisticsVar.map((item, key)=>(
                  <View style={{flexDirection:'row',marginLeft:10}}>
                  <MyIcon/>
                  <Text style={styles.TextStyle} key={key}> { item.replace('_',' ') } </Text>
                  </View>)
                )}
                </ScrollView>
          </View>
          <View style={{borderWidth:1,
                          alignItems:'center'
                         }}>
            
              
                </View>
          <View
          style={{flex:0.5}}>
          <TouchableHighlight
            onPress={() => {
              setStatistics([])
              toggleModalStatistics();
              }}
            style={[styles.atrasButton, {
            borderColor: 'cyan',
            borderWidth:1
            }]}
          >
          <Text style={[styles.textAtras, {
                color: 'cyan'
                
                }]}>ATRÁS</Text>
          </TouchableHighlight>
          </View>
      </Modal>
      )
    }
    
    const getData = async ()=>{

        let filter ={
            player:{
                eq: user.username
            }
        }
        try {
            const resp = await API.graphql({
                query:listTrainings,
                variables: {filter: filter},
                authMode: GRAPHQL_AUTH_MODE.AWS_IAM
            })
            setTrainingSessions(resp["data"]["listTrainings"]["items"])

        } catch (error) {
            console.log(error);
            Alert.alert("Error", "Ha ocurrido un error en el listado de entrenamientos.");
        }
        
    }
    useEffect(() => {
        getData();
      }, []);
    return (
         <View style={{flex:1,paddingTop: 1}}>
         
         
          {data &&
            <SafeAreaView>
                <FlatList 
                data={data}
                renderItem={({ item }) => (
                    <Item
                      id={item.id}
                      title={item["createdAt"]}
                      name={item["player"]}
                      status={item["status"]}
                      hit={item["hit"]}
                      trainer={item["trainer"]}
                      onSelect={onSelect}
                    />
                    
                )}
              >
                </FlatList>
            </SafeAreaView>
            }
          {modalStatistics ? 
            (<TrainingSession />)
            :
            <></>}
        </View>
    )
}