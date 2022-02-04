import {StatusBar, StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({

    button: {
        width:100,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom:10,
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