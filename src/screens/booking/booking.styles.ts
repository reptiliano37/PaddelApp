import {StatusBar, StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({

    button: {
        width:150,
        height:150,
        justifyContent: 'center',
        borderRadius: 75,
        marginBottom:20,
        backgroundColor:'white',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.55,
      },
      horizontal: {
        marginBottom: 10,
      },
      text_footer: {
        fontWeight: "bold",
        fontStyle: "italic"
    },
    textButtonStyle:{
      fontWeight: "bold",
      fontStyle: "italic",
      fontSize:20,
      color:'white'
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
        // width: '100%',
        // height: '100%',
        margin:50,
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
      buttonHourDisabled: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom:10,
        color:'grey'
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
        backgroundColor:'white',
        
      },
})

export default styles