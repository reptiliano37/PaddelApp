import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
  import {Auth} from 'aws-amplify'
  import {useAuth} from '../../contexts/auth-context';
  import React, { useState } from 'react';
  import { View, Text, Alert, TouchableOpacity,Button,Image } from 'react-native';

 export default function CustomDrawerContent(props, {navigation}) {
    const { user } = useAuth();
    const [signingOut, setSigningOut] = useState(false);
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
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
    );
  }