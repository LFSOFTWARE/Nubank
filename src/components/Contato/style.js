import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    text:{
        marginTop:30,
        marginLeft:30
    },
    contato:{
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor:"#F0F1F5",
        marginLeft:30,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        borderBottomColor:"#F0F1F5",
        borderBottomWidth:2,
        paddingBottom:10
    },
    nome:{
        color:"black",
        fontWeight:"bold",
        width:"70%",
        fontSize:17,
        marginLeft:"5%",
        marginTop:"5%",

    }
})

export default style