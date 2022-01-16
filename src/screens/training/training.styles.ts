import {StyleSheet} from "react-native";
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
        width:120,
        height:140,
        borderRadius:20,
        marginLeft:20,
        marginBottom:80,
        marginTop:50
    },
    buttonTraining2:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth:1,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:120,
        height:140,
        borderRadius:20,
        marginLeft:90,
        marginBottom:80,
        marginTop:50
    },
    image: {
        flex: 1,
        justifyContent: "center"
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
    }
});

export default styles;
