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
        marginTop:450
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
      playerTraining: {
        width: 50,
        height: 50,
      },
});

export default styles;
