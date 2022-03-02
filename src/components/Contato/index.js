import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import style from "./style";
const Contato = ()=>{

    return(
        <TouchableOpacity style={style.container}>
            <View style={style.contato}>
                <Text>LS</Text>
            </View>
            <Text style={style.nome}>LUIZ FERNANDO SILVA DOS SANTOS </Text>
        </TouchableOpacity>
    )

}



export default Contato