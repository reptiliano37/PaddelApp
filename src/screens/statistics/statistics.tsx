import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, TouchableOpacityBase } from 'react-native';

import styles from './statistics.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import {  listTrainings } from '../../graphql/queries'
import awsExports from "../../aws-exports";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';



type StatisticsProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Statistics">
}
function Item({ id, title,trainer,name,status,hit, onSelect }) {
    
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={
          styles.buttonTraining}
      >
        <Title>Entrenamiento de {name}</Title>
        <Text style={
                styles.dia}>Fecha: {title.split('T')[0]}</Text>
        <Text style={
                styles.hora}>Hora: {title.split('T')[1]}</Text>
        <Text style={
                styles.entrenador}>Entrenador: {trainer}</Text>
      </TouchableOpacity>
    );
  }
  

export default function Statistics({navigation}: StatisticsProps) {
    const { user } = useAuth();
    const [selected, setSelected] = React.useState(new Map());
    const [data, setTrainingSessions] = useState([])
    const onSelect = React.useCallback(
        id => {
          const newSelected = new Map(selected);
          newSelected.set(id, !selected.get(id));
    
          setSelected(newSelected);
        },
        [selected],
      );

    
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
            console.log(data)
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
        <>
         <View style={{flex:1,paddingTop: 1}}>
            {data &&
            (<SafeAreaView>
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
                )}>
                    
                </FlatList>
            </SafeAreaView>
            )}
         </View>
        </>
    )
}