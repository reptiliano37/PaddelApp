import {StyleSheet, Platform,} from "react-native";
import { Colors } from "react-native-paper";

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#6495ED'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    otpInputBox:{
        color: Colors.black,
        borderColor: '#6495ED',
        fontSize:20,
        fontWeight: 'bold'
    },
    otpActiveInputBox:{
        borderWidth: 3,
        borderColor:'#6495ED'

    },
    otpText:{
        color: '#6495ED',
        fontWeight:'bold',
        fontSize:18
    },
    resendLink:{
        color: '#6495ED',
        textAlign:'center',
        fontSize:18,
        textDecorationLine: 'underline'
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    picker: {
        flexDirection: 'row',
        marginTop: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey',
    },
    dropdownBtnStyle: {
        flex: 1,
        height: 50,
        color:"#05375a",
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#05375a",
      },
    dropdownDropdownStyle: { 
        backgroundColor: "#EFEFEF",
        borderRadius: 8,
    },
    dropdownRowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
    },
    dropdownRowTxtStyle: { 
        color: "#05375a", textAlign: "center" 
    },
    buttonTextPicker: { 
        color: "#05375a", textAlign: "center" 
    },
  });

  export default styles;