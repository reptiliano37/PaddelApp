import {StatusBar, StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({

    button: {
        width:150,
        height:150,
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 80,
        marginBottom:20,
        backgroundColor:'white',
        alignItems: 'center'
      },
      text_footer: {
        fontWeight: "bold",
        fontStyle: "italic"
    },
    text_position:{
        position: 'absolute', 
        top: 80, 
        left: 0, 
        right: 0,
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    image: {
      width: 100,
      height: 60,
      resizeMode: 'contain',
      justifyContent: 'center',
      marginBottom:20,
  },
      buttonSection:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonHour: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom:10,
      },
      atrasButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        // marginBottom:10,
    },
    textAtras: {
      fontSize: 18,
      fontWeight: 'bold'
  },
    buttonModal: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        // marginBottom:10,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      textButtonModal: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22
      },
      modalView: {
        // margin: 20,
        flex:1,
        alignContent:'center',
        backgroundColor: "white",
        borderRadius: 20,
        // padding: 70,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        }
    },
    containerList: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        paddingTop: 50,
        backgroundColor:'white'
      },
})

export default styles