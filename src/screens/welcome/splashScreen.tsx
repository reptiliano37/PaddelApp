import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StatusBar,
} from 'react-native';
import styles from './splashScreen.styles'
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import { useTheme } from '@react-navigation/native';
import { Home } from '..';
// import SignInScreen from './SignInScreen';

type SplashScreenProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "SplashScreen">
  }

export default function SplashScreen({navigation}: SplashScreenProps) {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duration={1500}
            source={require('../../../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>¡Bienvenid@ a tu club de pádel!</Text>
            <Text style={styles.text}>Inicia sesión con tu cuenta o regístrate.</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate("SignInScreen")}>
                <LinearGradient
                    colors={['#6495ED', 'cyan']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Dale caña</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};
