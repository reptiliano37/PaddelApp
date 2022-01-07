import {StyleSheet} from "react-native";
// import * as paddleLogo from "../../../assets/paddle.png";

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center"
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
        flexDirection:"column",
        borderWidth:1
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        
    },
    text_footer: {
        fontWeight: "bold",
        fontStyle: "italic"
    }
});

export default styles;
