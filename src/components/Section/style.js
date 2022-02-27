import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderTopColor:"#F5F5F5",
        borderTopWidth:2,
        borderBottomColor:"#F5F5F5",
        borderBottomWidth:2
    },
    boxT: {

        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:15

    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        color:"black"
    },
    text:{
        marginTop:20,
        fontSize:17,
        marginBottom:10
        
    },
    icon:{
        marginTop:15
    }

})


export default style