import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
  import {Auth} from 'aws-amplify'
  import {useAuth} from '../../contexts/auth-context';
  import React, { useState } from 'react';
  import { View, Text, Alert, TouchableOpacity,Button,Image } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import styles from './drawerContent.styles'

 export default function CustomDrawerContent(props, {navigation}) {
    const { user } = useAuth();
    const [signingOut, setSigningOut] = useState(false);
    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <View style={styles.userInfoSection}>
            
              <View style={{flexDirection:'row'}}>
              
                {user && (
                    <>
                      <Image source={require("../../../assets/user.png")} style={styles.image} />
                      <View style={{flexDirection:'column'}}>
                      <Title style={styles.title}> {user.username}</Title>
                        <Caption style={styles.caption}>{user.attributes["custom:typeUser"]}</Caption>
                      </View>
                    </>
                    // 
                  )}
                    
              </View>
              
            </View>
            </Drawer.Section>
            <DrawerItemList {...props} />
          
          <Drawer.Section style={styles.drawerSection}>
            {/* <DrawerItem 
                icon={({color, size}) => (
                    <Icon 
                    name="home-outline" 
                    color={color}
                    size={size}
                    />
                )}
                label="Home"
                onPress={() => {props.navigation.navigate('Home')}}
            /> */}
            </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
            icon={({color, size}) => (
              <Icon 
              name="exit-to-app" 
              color={color}
              size={size}
              />
          )}
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
            </Drawer.Section>
      </View>
    );
  }