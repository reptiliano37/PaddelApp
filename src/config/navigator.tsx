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
import Training from '../screens/training/training';
import Calendar from '../screens/calendar/calendar';
import Score from '../screens/score/score';
import DrawerContent from '../screens/drawerContent/drawerContent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type StackNavigatorParams = {
    SplashScreen:undefined;
    SignInScreen:undefined;
    SignUpScreen:{username: string } | undefined;
    Home: {username: string } | undefined;
    Training: {username: string } | undefined;
    Calendar: {username: string } | undefined;
    Score: {username: string } | undefined;
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
                               drawerActiveTintColor:"black",
                               drawerIcon: ({focused, size}) => (
                                  <Icon
                                     name="home"
                                     size={size}
                                     color={focused ? 'cyan' : '#ccc'}
                                  />
                               ),
                               
                            }}/>
                            <Drawer.Screen name = "Training" component={Training} options={ {
                               title: 'Entrenamiento',
                               drawerActiveTintColor:"black",
                               drawerIcon: ({focused, size}) => (
                                  <Icon
                                     name="tennis-ball"
                                     size={size}
                                     color={focused ? 'yellow' : '#ccc'}
                                  />
                               ),
                              //  headerShown: false,
                               
                            }}/>
                            <Drawer.Screen name = "Calendar" component={Calendar} options={ {
                               title: 'Calendario',
                               drawerActiveTintColor:"black",
                               drawerIcon: ({focused, size}) => (
                                  <Icon
                                     name="calendar"
                                     size={size}
                                     color={focused ? '#6495ED' : '#ccc'}
                                  />
                               ),
                            }}/>
                            <Drawer.Screen name = "Score" component={Score} options={ {
                               title: 'Marcador',
                               drawerActiveTintColor:"black",
                               drawerIcon: ({focused, size}) => (
                                  <Icon
                                     name="scoreboard"
                                     size={size}
                                     color={focused ? '#6495ED' : '#ccc'}
                                  />
                               ),
                               headerShown: false,
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