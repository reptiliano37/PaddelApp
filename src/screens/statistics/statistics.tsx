import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, TouchableOpacityBase } from 'react-native';

import styles from './statistics.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listPlayers, getTraining, listTrainings } from '../../graphql/queries'
import awsExports from "../../aws-exports";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';



type StatisticsProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Statistics">
}

export default function Statistics({navigation}: StatisticsProps) {
    const { user } = useAuth();

    async function showStatistics(){

        let filter ={
            player:{
                eq: user.username
            }
        }
        const trainingSession = await API.graphql({
            query:listTrainings,
            variables: {filter: filter},
            authMode: GRAPHQL_AUTH_MODE.AWS_IAM
        })
        console.log(trainingSession)
    }
    return (
        <>
         {showStatistics()}
        </>
    )
}