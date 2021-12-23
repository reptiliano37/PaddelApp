import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import styles from './signInScreen.styles'
import AppBootstrap from '../../components/app-bootstrap'
import ButtonComponent from '../../components/button/button';
import { Auth } from 'aws-amplify';
// import { AuthErrorStrings } from '@aws-amplify/auth';



type SignInScreenProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "SignInScreen">
  }

export default function SignInScreen({navigation}: SignInScreenProps) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [isSecureEntry, setSecureEntry] = useState(true)

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const [loading, setLoading] = useState(false);

    const setDataInput = (key: keyof typeof data, value:string) =>{
        setData({...data,[key]: value})
    }

    // const { signIn } = React.useContext(AuthContext);

    // const textInputChange = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: true,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: false,
    //             isValidUser: false
    //         });
    //     }
    // }

    // const handlePasswordChange = (val) => {
    //     if( val.trim().length >= 8 ) {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: false
    //         });
    //     }
    // }

    const updateSecureTextEntry = () => {
        setSecureEntry(!isSecureEntry)
        // setData({
        //     ...data,
        //     secureTextEntry: !data.secureTextEntry
        // });
    }

    // const handleValidUser = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             isValidUser: false
    //         });
    //     }
    // }

    // const loginHandle = (email:any, password:any) => {

    //     // const foundUser = Users.filter( item => {
    //     //     return email == item.email && password == item.password;
    //     // } );

    //     if ( email.length == 0 || password.length == 0 ) {
    //         Alert.alert('Wrong Input!', 'email or password field cannot be empty.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }

    //     if ( foundUser.length == 0 ) {
    //         Alert.alert('Invalid User!', 'email or password is incorrect.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }
    //     // signIn(foundUser);
    // }

    const login = async() =>{
        setLoading(true);
        const {username, password} = data;
        try{
            await Auth.signIn(username,password);
            navigation.navigate("Home",{username})
        } catch(error:any){
            console.log(error)
            if (error.code === "UserNotConfirmedException"){
                Alert.alert("Aviso","¡Usuario no confirmado! Por favor vuelve a introducir el código de confirmación.")
                navigation.navigate("SignUpScreen", {username})
            }
            Alert.alert("Error!", error || "¡Ha ocurrido un error!")
        }setLoading(false)
    }

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Hola</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => 
                        setDataInput("username",val)
                    }
                    // onChangeText={setEmail}
                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {/* {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null} */}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>email must be 4 characters long.</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={isSecureEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => 
                        setDataInput("password",val)
                    }
                    // onChangeText={setPassword}
                    
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {isSecureEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                {/* <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</Text> */}

            </View>
            {/* { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            } */}
            

            <TouchableOpacity>
                <Text style={{color: '#6495ED', marginTop:15}}>¿Olvidaste la contraseña?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={login}
                >
                <LinearGradient
                    colors={['#6495ED', 'cyan']}
                    style={styles.signIn}
                >
                    <ButtonComponent title="Iniciar sesión" loading={loading}></ButtonComponent>

                </LinearGradient>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: 'cyan',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                ><LinearGradient
                    colors={['#6495ED', '#6495ED']}
                    style={styles.signIn}>
                        <Text style={[styles.textSign, {color: 'white'}]}>Regístrate</Text>
                    </LinearGradient>

                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    )
}