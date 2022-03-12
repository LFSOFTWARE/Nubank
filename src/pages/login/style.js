import { StyleSheet } from "react-native";


const style = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:"#830AD1",
       justifyContent:"center",
       alignItems:"center"
   },
   boxLogin:{
       width:"90%",
       height:500,
       backgroundColor:"white"
   },
   title:{
       alignSelf:"center",
       marginVertical:"10%",
       color:"black",
       fontWeight:"bold",
       fontSize:19
   },
    input:{
        backgroundColor:"white",
        margin:20
    },
    btn:{
        width:"80%",
        height:60,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10%",
        borderWidth:1,
        borderColor:"#830AD1"
    }
})


export default style

