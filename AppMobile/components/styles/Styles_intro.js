import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999999',
        
    },
    button:{
        height: 50,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d4d4d4',
    },
    slider:{
        backgroundColor: 'green',
    },
    title:{
        fontSize: 20, 
        marginTop: 20, 
        textAlign: 'center'
    },
    text:{
        fontSize: 18, 
        marginTop: 30, 
        textAlign: 'center'
    },
    buttonCircle:{
        height: 50,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d4d4d4',
        //backgroundColor: '#red',
    },
    circle:{
        marginTop: 50,
        height: 200,
        width: 200,
        borderRadius: 200,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text_in_circle:{
        fontSize: 20, textAlign: 'center',
    },
    next_button:{
        flex: 0.2,
    },
    done_button:{
        //flex: 1,
    },

})
export default styles;