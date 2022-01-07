import {StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        paddingRight:150
    },
    buttonTraining:{
        flex:1,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 50,
        marginBottom: 1,
        marginTop: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
    },
    image: {
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
    }
});

export default styles;
