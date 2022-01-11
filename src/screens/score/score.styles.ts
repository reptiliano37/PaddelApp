import {StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({
    viewAlpha:{
        flex:1,
        backgroundColor:"#3071fb",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    viewBeta:{
        flex:1, backgroundColor:"#fb5430",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection:'row',
        justifyContent: 'space-evenly'
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
        color:'white',
        marginEnd:80
    },
    image: {
        width: 50,
        height: 50,
        marginStart:-80,
        justifyContent:'center',
    },
    minus: {
        width: 50,
        height: 50,
        marginStart:20,
        justifyContent:'center',
        padding:40
    },
  });
export default styles;
