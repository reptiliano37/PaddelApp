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
      <DrawerContentScrollView>
          <DrawerItem
            label="Cerrar Sesión"
            // loading={signingOut}
            onPress={async ()=>{
              if (user){
                setSigningOut(true);
                try {
                  await Auth.signOut()
                } catch (error) {
                  Alert.alert("Error!", "Error signing out!")
                }
                setSigningOut(false);
              }else {
                navigation.navigate("SignInScreen")
              }
              navigation.navigate("SignInScreen")
            }}/>
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.buttonTraining} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("../../../assets/paddle.png")} style={styles.image}/>
        </TouchableOpacity>
      
        {user && (
              <Text>
                  Logged in as
                  <Text> {user.username}</Text>
              </Text>
          )}
     </View>
  );
}
