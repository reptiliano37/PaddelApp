import {StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({
    viewAlpha:{
        flex:1, 
        backgroundColor:"#3071fb",
        alignItems: "center",
        justifyContent: "center",
    },
    viewBeta:{
        flex:1, backgroundColor:"#fb5430",
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        height: '100%', 
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        justifyContent:'center', 
        alignContent:'center',
        fontSize:80,
        fontWeight:'bold',
        color:'white'
    },
    image: {
        width: 10,
        height: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:100

    },
  });
export default styles;
