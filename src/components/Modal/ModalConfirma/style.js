import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    modal:{
        backgroundColor: 'white', 
        padding: 10,
        width:"100%",
        marginTop:"6%",
        borderRadius:6,
        flex:1
    },
    text:{
        padding:18,
        fontSize:35,
        color:"black",
        fontWeight:"bold"
    },
    valor:{
        color:"#830AD1",
        fontSize:45,
        fontWeight:"bold",
        paddingHorizontal:20,

    },
    nome:{
        color:"black",
        fontWeight:"bold",
        fontSize:24,
        marginTop:10
    },
    textMensagem:{
        color:"#830AD1",
        alignSelf:"center",
        marginVertical:20,
        fontSize:18
    },
    container:{
        width:"100%",
        height:"13%",
        padding:20,
        borderTopWidth:1,
        borderTopColor:"#F0F1F5"
    },
    icon:{
        marginLeft:"70%"
    },
    dadosBancarios:{
        width:"100%",
        padding:20,
        borderTopWidth:1,
        borderTopColor:"#F0F1F5"
    },
    btn:{

        alignSelf:"center",
        width:"90%",
        height:60,
        backgroundColor:"#830AD1",
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center"
    },
    containerSenha:{
        backgroundColor: 'white', 
        padding: 10,
        width:"100%",
        marginTop:"18%",
        borderRadius:6,
        flex:1
    },
    input:{
        width:60,
        height:50, 
        borderColor:"gray",
        borderWidth:1,
        justifyContent:"center",
        alignContent:"center",
        marginLeft:5,
        fontSize:20
    }
})

export default style