import {StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({
    buttonTraining:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 50,
        marginBottom: 1,
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
        shadowColor: 'cyan',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
    },
    dia:{
        fontStyle: "italic",
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0,
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    hora:{
        fontStyle: "italic",
        position: 'absolute', 
        top: 20, 
        left: 0, 
        right: 0,
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    entrenador:{
        fontStyle: "italic",
        position: 'absolute', 
        top: 40, 
        left: 0, 
        right: 0,
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default styles