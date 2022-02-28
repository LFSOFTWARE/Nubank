import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";


const Teste = (props) =>{

    const {set1} = useContext(props.contexto)

    return(
        <TouchableOpacity onPress={set1} style={{backgroundColor:"gray",width:50,height:50,marginTop:20}}>
            <Text>
                Clicar
            </Text>
        </TouchableOpacity>
    )
}


export default Teste