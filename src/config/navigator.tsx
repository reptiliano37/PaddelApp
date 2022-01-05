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
                    <Drawer.Navigator>
                        <Drawer.Screen name = "Home" component={Home}/>
                    </Drawer.Navigator>
                    ) : (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name = "SplashScreen" component={SplashScreen}/>
                    <Stack.Screen name = "SignInScreen" component={SignInScreen}/>
                    <Stack.Screen name = "SignUpScreen" component={SignUpScreen}/>                    
                </Stack.Navigator>
                    )}
            </NavigationContainer>
      )
    }