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

  function incrementCounterAlpha(counterAlpha){
    counterAlpha += 1
    setCounterAlpha(counterAlpha)
    return counterAlpha;
  }
  function decrementCounterAlpha(counterAlpha){
    return counterAlpha -= 1;
  }
  function incrementCounterBeta(counterBeta){
    counterBeta += 1
    setCounterBeta(counterBeta)
    return counterBeta += 1;
  }
  function decrementCounterBeta(counterBeta){
    return counterBeta -= 1;
  }

  return (
    <>
      <View style={styles.viewAlpha}>
        <TouchableOpacity style={styles.button} onPress={() => {
          incrementCounterAlpha(counterAlpha)
          console.log(counterAlpha)}}>
            <Text style={styles.text}>{counterAlpha}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../assets/arrow-circle.png")} style={styles.image}/>
        </TouchableOpacity>
      </View >
      <View style={{backgroundColor: 'yelow'}}>

      </View>
      <View style={styles.viewBeta}>
      <TouchableOpacity style={styles.button} onPress={() => {
          incrementCounterBeta(counterBeta)
          console.log(counterBeta)}}>
            <Text style={styles.text}>{counterBeta}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};