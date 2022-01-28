import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, TouchableOpacityBase } from 'react-native';

import styles from './booking.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';


type BookingProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Booking">
}

export default function Booking({navigation}: BookingProps) {
    return (
        <></>
    )
}