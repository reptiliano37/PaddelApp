import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, } from 'react-native';

import styles from './training.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';


type TrainingProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Training">
}

export default function Training({navigation}: TrainingProps) {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../../../assets/fondo2.jpg")} resizeMode="cover" style={styles.image}>
        </ImageBackground>
     </View>
  );
}
