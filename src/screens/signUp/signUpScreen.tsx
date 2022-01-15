import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    ScrollView,
    StatusBar,
    Alert,
    Platform,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import OTPInput from '@twotalltotems/react-native-otp-input'
import {StackNavigatorParams} from '../../config/navigator'
import styles from './signUpSreen.styles'
import { Auth } from 'aws-amplify';
import ButtonComponent from '../../components/button/button';
import SelectDropdown from 'react-native-select-dropdown'

type SignUpScreenProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "SignUpScreen">,
    route: RouteProp<StackNavigatorParams, "SignUpScreen">
  }

  export default function SignUpScreen({navigation, route}: SignUpScreenProps) {

    const [data, setData] = React.useState({
        username: '',
        email:'',
        name:'',
        password: '',
        confirm_password: '',
        typeUser:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });
    const unconfirmedUsername= route.params?.username;
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<"signUp" | "otp">(unconfirmedUsername ? "otp": "signUp");
    const [confirming, setConfirming]= useState(false)
    const [resending, setResending]= useState(false)
    const userTypes = ["Entrenador", "Jugador"]

    const signup = async () =>{
        
        setLoading(true)
        const {username, password, email, name, typeUser} = data;
        try{
            console.log(data)
            await Auth.signUp({
                username,
                password,
                attributes:{
                    email,
                    name,
                    'custom:typeUser': typeUser
                }
            })
            setStep("otp");
        }catch(error){
            console.log(error);
            Alert.alert("Error", "Ha ocurrido un error en el registro.");
        }
        setLoading(false);
    }

    const setDataInput = (key: keyof typeof data, value:string) =>{
        setData({...data,[key]: value})
    }

    const textInputChange = (val:any) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val:any) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val:any) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const confirmCode = async (code:string) =>{
        setConfirming(true)
        try {
            await Auth.confirmSignUp(data.username || unconfirmedUsername || "", code)
            Alert.alert("Éxito", "Ahora puedes iniciar sesión en tu club de pádel.")
            navigation.navigate("SignInScreen")
        } catch (error:any) {
            Alert.alert("Error", error.message || "Error en confirmación de código.")
        }
        setConfirming(false)
    }
    const resenCode = async(username:string) =>{
        setResending(true);
        try {
            await Auth.resendSignUp(username)
        } catch (error:any) {
            Alert.alert("Error", error.message || "Error en confirmación de código.")
        }
        setResending(false);
    }
    useEffect(() => {
      if (unconfirmedUsername){
          resenCode(unconfirmedUsername);
      }
    }, [])
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>¡Regístrate ahora!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <KeyboardAvoidingView 
                behavior="padding" style={{flex:1}}>
                <ScrollView>
                    {step ==="otp" && (

                        <>
                        <Text style={styles.otpText}>Por favor, introduce el código que has recibido vía E-mail:</Text>
                        {confirming ? (
                            <ActivityIndicator color='black'/>
                        ):
                        <OTPInput
                            codeInputFieldStyle={styles.otpInputBox}
                            codeInputHighlightStyle={styles.otpActiveInputBox}
                            pinCount={6}
                            onCodeFilled={code =>{
                                confirmCode(code);
                            }}
                        />}
                        {resending ?
                            ( <ActivityIndicator color='grey'/>
                            ) : (
                        <TouchableOpacity onPress={
                            () => {
                                resenCode(data.username)
                            }
                        }>
                            <Text style={styles.resendLink}>Reenviar código de confirmación</Text>
                        </TouchableOpacity>
                            )}
                        </>
                    )}
                    {step ==="signUp" && (
                    <>
                    <Text style={styles.text_footer}>Nombre de usuario</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Tu nombre de usuario"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => 
                                setDataInput("username",val)
                            }
                        />
                        {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>E-mail</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="envelope-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            keyboardType="email-address"
                            placeholder="Tu E-Mail"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => 
                                setDataInput("email",val)
                            }
                        />
                        {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Nombre</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="users"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Tu nombre"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => 
                                setDataInput("name",val)
                            }
                        />
                        {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Tipo de usuario</Text>
                    <View style={styles.picker}>
                        <SelectDropdown
                                defaultButtonText={"Selecciona tipo de usuario"}
                                buttonStyle={styles.dropdownBtnStyle}
                                buttonTextStyle={styles.buttonTextPicker}
                                data={userTypes}
                                onSelect={(selectedItem, index) => 
                                    setDataInput("typeUser",selectedItem)
                                    // console.log(selectedItem, index)
                                }
                                buttonTextAfterSelection={(selectedItem, index) => {
                                     return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                   return item
                                }}
                                renderDropdownIcon={(isOpened) => {
                                    return (
                                      <FontAwesome
                                        name={isOpened ? "chevron-up" : "chevron-down"}
                                        color={"#05375a"}
                                        size={18}
                                      />
                                    );
                                  }}
                                dropdownStyle={styles.dropdownDropdownStyle}
                                rowStyle={styles.dropdownRowStyle}
                                rowTextStyle={styles.dropdownRowTxtStyle}
                                
                            />
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Contraseña</Text>
                    <View style={styles.action}>
                        <Feather 
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Tu contraseña"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            // onChangeText={(val) => handlePasswordChange(val)}
                            onChangeText={(val) => 
                                setDataInput("password",val)
                            }
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ? 
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
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Confirma contraseña</Text>
                    <View style={styles.action}>
                        <Feather 
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Confirma tu contraseña"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.secureTextEntry ? 
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
                    </View>
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            Registrádote estás de acuerdo con los
                        </Text>
                        <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Términos y condiciones de servicio</Text>
                        <Text style={styles.color_textPrivate}>{" "}y nuestra</Text>
                        <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Política de privacidad</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={signup}
                        >
                        <LinearGradient
                            colors={['#6495ED', 'cyan']}
                            style={styles.signIn}
                        >
                            <ButtonComponent title="Registrarse" loading={loading}>Registrarse</ButtonComponent>
                        </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: 'cyan',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: 'cyan'
                            }]}>Volver a Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                    </>)}
                </ScrollView>
            </KeyboardAvoidingView>

        </Animatable.View>
      </View>
      )
  };
