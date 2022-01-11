import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, TouchableOpacityBase } from 'react-native';

import styles from './score.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';


type ScoreProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Score">
}

export default function Score({navigation}: ScoreProps) {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [counterAlpha, setCounterAlpha] = useState(0);
  const [counterBeta, setCounterBeta] = useState(0);

  function incrementCounterAlpha(counterAlpha:number){
    counterAlpha += 1
    setCounterAlpha(counterAlpha)
    return counterAlpha;
  }
  function decrementCounterAlpha(counterAlpha:number){
    counterAlpha -= 1
    setCounterAlpha(counterAlpha)
    return counterAlpha;
  }
  function incrementCounterBeta(counterBeta:number){
    counterBeta += 1
    setCounterBeta(counterBeta)
    return counterBeta += 1;
  }
  function decrementCounterBeta(counterBeta:number){
    counterBeta -= 1
    setCounterBeta(counterBeta)
    return counterBeta;
  }

  return (
    <>
      <View style={styles.viewAlpha}>
      <TouchableOpacity onPress={() => {
          decrementCounterAlpha(counterAlpha)}}>
          <Image source={require("../../../assets/minus.png")} style={styles.minus}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          incrementCounterAlpha(counterAlpha)}}>
            <Text style={styles.text}>{counterAlpha}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setCounterAlpha(0)}}>
          <Image source={require("../../../assets/reset_white.png")} style={styles.image}/>
        </TouchableOpacity>
      </View >
      <View style={styles.viewBeta}>
      <TouchableOpacity onPress={() => {
          decrementCounterBeta(counterBeta)}}>
          <Image source={require("../../../assets/minus.png")} style={styles.minus}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          incrementCounterBeta(counterBeta)}}>
            <Text style={styles.text}>{counterBeta}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setCounterBeta(0)}}>
          <Image source={require("../../../assets/reset_white.png")} style={styles.image}/>
        </TouchableOpacity>
      </View>
    </>
  );
};