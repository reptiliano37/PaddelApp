import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
        
    },
    containerTraining:{
        alignItems: "center",
        justifyContent: "center",
        // paddingRight:150
    },
    containerCalendar:{
        alignItems: "center",
        justifyContent: "center",
        // paddingRight:200
    },
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
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.55,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
    },
    buttonCalendar:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 50,
        marginBottom: 1,
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.55,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
    },
    buttonStatistics:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 50,
        marginBottom: 1,
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.55,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
    },
    buttonScore:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 50,
        marginBottom: 1,
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.65,
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
