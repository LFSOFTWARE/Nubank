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
    },
    subTitle:{
        marginTop:10,
        fontSize:15,
        marginBottom:10
    },
    saldo:{
        fontSize: 25,
        fontWeight: '700',
        color: "black"
    },
    btn:{
        width:150,
        height:35,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F3F4F7",
        borderRadius:20,
        marginBottom:20,
        marginTop:10
    }

})


export default style