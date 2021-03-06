import {StatusBar, StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    buttonTraining:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth:1,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:50,
        marginLeft:20,
        marginTop:100,
    },
    buttonStop:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth:1,
        borderColor:'white',
        alignItems:'flex-end',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:50,
        marginTop:450,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    startTraining: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
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
    containerList: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize: 18,
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 30,
        textAlign: "center"
      },
      button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom:10,
      },
      containerParent:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerPlayer:{
        // flex:1,
        marginStart:10
      },
      playerTraining: {
        width: 60,
        height: 60,
        marginBottom:10,
        marginTop:10,
        marginEnd:10,
      },
      containerTimer: {
        // flex: 1,
        alignItems: 'center',
        padding: 20,
        marginStart:150
        // marginBottom:300,
    },
      timer: {
        marginVertical: 10,
      },
      timerText: {
          fontSize: 20,
          color: 'white',
          // marginTop:450,
      },
      buttonStart: {
        marginVertical: 15,
        width: 20,
        height: 20,
        marginLeft:20,
    },
      buttonPause: {
        marginVertical: 5,
        width: 20,
        height: 20,
        marginLeft:20,
    },
      buttonResume: {
        marginVertical: 5,
        width: 20,
        height: 20,
        marginLeft:20,
    },
    playerButton1:{
      flex:1,
      marginTop:250,
      alignItems:'center',
      height: 100,
      width: 100,
      flexDirection:'column',
      justifyContent:'center'
    },
    playerButton2:{
      marginStart:210, 
      marginTop:-130,
      alignItems:'center',
      height: 100,
      width: 100,
      flexDirection:'column',
      justifyContent:'center'
    },
    playerButton3:{
      marginTop:90,
      alignItems:'center',
      height: 100,
      width: 100,
      justifyContent:'space-evenly'
    },
    playerButton4:{
      marginStart:210,
      marginTop:-100,
      alignItems:'center',
      height: 100,
      width: 100,
      flexDirection:'column',
      justifyContent:'space-around'
    },
    initialText: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
    
});

export default styles;
