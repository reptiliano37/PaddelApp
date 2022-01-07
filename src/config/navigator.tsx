import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBootstrap from '../components/app-bootstrap';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {useAuth} from '../contexts/auth-context'
import {Home} from '../screens';
import SplashScreen from '../screens/welcome/splashScreen';
import SignInScreen from '../screens/signIn/signInScreen';
import SignUpScreen from '../screens/signUp/signUpScreen';
import DrawerContent from '../screens/drawerContent/drawerContent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type StackNavigatorParams = {
    SplashScreen:undefined;
    SignInScreen:undefined;
    SignUpScreen:{username: string } | undefined;
    Home: {username: string } | undefined;
    MainScreen: undefined;
}

const Stack = createNativeStackNavigator<StackNavigatorParams>();
const Drawer = createDrawerNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
    const { user } = useAuth();

        return (
            <NavigationContainer>
                { user  ? (
                    <>
                        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} 
                                          screenOptions={{
                                                drawerStyle: {
                                                backgroundColor: 'white',
                                                width: 240,
                                                },
                                                headerTintColor: 'black'
                                            }}>
                            <Drawer.Screen name = "Home" component={Home} options={ {
                               title: 'Home',
                               drawerActiveTintColor:"grey",
                               drawerIcon: ({focused, size}) => (
                                  <Icon
                                     name="home-outline"
                                     size={size}
                                     color={focused ? 'grey' : '#ccc'}
                                  />
                               ),
                            }}/>
                        </Drawer.Navigator>
                    </>
                    ) : (
                    <>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name = "SplashScreen" component={SplashScreen}/>
                        <Stack.Screen name = "SignInScreen" component={SignInScreen}/>
                        <Stack.Screen name = "SignUpScreen" component={SignUpScreen}/>                 
                    </Stack.Navigator>
                    </> 
                    )}
            </NavigationContainer>
      )
    }