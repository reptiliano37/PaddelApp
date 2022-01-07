import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image } from 'react-native';

import styles from './home.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">
}

export default function Home({navigation}: HomeProps) {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonTraining} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../../../assets/paddle.png")} style={styles.image}/>
          <View style={{position: 'absolute', top: 80, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text_footer}>Entrenamiento</Text>
          </View>
      </TouchableOpacity>
     </View>
  );
}
