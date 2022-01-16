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
          <View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.buttonTraining}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                      <Text style={{color:'white',fontWeight: "bold",marginTop:20,fontSize:50}}>+</Text>
                      <Text style={{color:'white',fontWeight: "bold",marginTop:10}}>Añadir jugador</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTraining2}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                      <Text style={{color:'white',fontWeight: "bold",marginTop:20,fontSize:50}}>+</Text>
                      <Text style={{color:'white',fontWeight: "bold",marginTop:10}}>Añadir jugador</Text>
                    </View>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.buttonTraining}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                      <Text style={{color:'white',fontWeight: "bold",marginTop:20,fontSize:50}}>+</Text>
                      <Text style={{color:'white',fontWeight: "bold",marginTop:10}}>Añadir jugador</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTraining2}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                      <Text style={{color:'white',fontWeight: "bold",marginTop:20,fontSize:50}}>+</Text>
                      <Text style={{color:'white',fontWeight: "bold",marginTop:10}}>Añadir jugador</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
     </View>
  );
}
