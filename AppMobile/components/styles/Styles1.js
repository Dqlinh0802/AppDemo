import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999999',
    },
    title: {
        //backgroundColor:'red',
        fontSize: 30, 
        fontWeight: "bold",
        textAlign: 'center'
    },
    link: {
        //backgroundColor:'green',
        fontSize: 18, 
        marginTop: 10, 
        textAlign: 'center'
    },
    btn:{
        marginTop: 40,
        height: 30,
        width: 200,
    },
    txt:{
        //backgroundColor:'blue',
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18, 
        color: 'blue', 
        textAlign: 'center'
    },
    text:{
        fontSize: 18,
    },
    logo:{
        height: 150, 
        width: 150, 
        borderRadius: 150,
        borderWidth: 2, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom:30,
        marginTop: 30,
    },
});
export default styles;