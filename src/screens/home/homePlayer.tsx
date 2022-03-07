import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image } from 'react-native';

import styles from './home.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';

type HomePlayerProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">
}

export default function HomePlayer({navigation}: HomePlayerProps) {
  const { user } = useAuth();
  console.log({user})
  const [signingOut, setSigningOut] = useState(false);
  return (
    <View  style={styles.container}>
      <LinearGradient
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    locations={[0,0.5,0.6]}
                    colors={['cyan','#6495ED', '#6495ED']}
                    style={{flex:1}}
                >
      <View style={styles.containerTraining}>
        <TouchableOpacity style={styles.buttonTraining} onPress={()=>{navigation.navigate("Booking")}}>
            <Image source={require("../../../assets/tennis-court.png")} style={styles.image}/>
            <View style={styles.text_position}>
              <Text style={styles.text_footer}>Reservar pista</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerTraining}>
        <TouchableOpacity style={styles.buttonStatistics} onPress={()=>{navigation.navigate("Statistics")}}>
            <Image source={require("../../../assets/bar-chart.png")} style={styles.image}/>
            <View style={styles.text_position}>
              <Text style={styles.text_footer}>Estadísticas</Text>
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
      </LinearGradient>
     </View>
  );
}
