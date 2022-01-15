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
  console.log({user})
  const [signingOut, setSigningOut] = useState(false);
  return (
    <View  style={styles.container}>
      <View style={styles.containerTraining}>
        <TouchableOpacity style={styles.buttonTraining} onPress={()=>{navigation.navigate("Training")}}>
            <Image source={require("../../../assets/paddle.png")} style={styles.image}/>
            <View style={styles.text_position}>
              <Text style={styles.text_footer}>Entrenamiento</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCalendar}>
        <TouchableOpacity style={styles.buttonCalendar} onPress={()=>{navigation.navigate("Calendar")}}>
            <Image source={require("../../../assets/calendario.png")} style={styles.image}/>
            <View style={styles.text_position}>
              <Text style={styles.text_footer}>Calendario</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCalendar}>
        <TouchableOpacity style={styles.buttonScore} onPress={()=>{navigation.navigate("Score")}}>
            <Image source={require("../../../assets/scoreboard.png")} style={styles.image}/>
            <View style={styles.text_position}>
              <Text style={styles.text_footer}>Marcador</Text>
            </View>
        </TouchableOpacity>
      </View>
     </View>
  );
}
