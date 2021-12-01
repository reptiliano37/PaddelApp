import React, { ReactElement } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBootstrap from '../components/app-bootstrap'
import {Home, MainScreen} from '../screens';
import SplashScreen from '../screens/welcome/splashScreen';
import SignInScreen from '../screens/signIn/signInScreen';
import SignUpScreen from '../screens/signUp/signUpScreen';
export type StackNavigatorParams = {
    SplashScreen:undefined;
    SignInScreen:undefined;
    SignUpScreen:undefined;
    Home: undefined;
    MainScreen: undefined;
}

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
  return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name = "SplashScreen" component={SplashScreen}/>
                <Stack.Screen name = "SignInScreen" component={SignInScreen}/>
                <Stack.Screen name = "SignUpScreen" component={SignUpScreen}/>
                <Stack.Screen name = "Home" component={Home}/>
                <Stack.Screen name = "MainScreen" component={MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}
