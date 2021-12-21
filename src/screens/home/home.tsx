import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

import styles from './home.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'

type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">
}

export default function Home({navigation}: HomeProps) {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Homeeeeee</Text>
      <Button title="MainScreen" onPress= {() => {navigation.navigate("MainScreen")}}/>
      <ButtonComponent
        title="LogOut"
        loading={signingOut}
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
        {user && (
              <Text>
                  Logged in as
                  <Text> {user.username}</Text>
              </Text>
          )}
     </View>
  );
}
