import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import style from "./style";
const Contato = (props)=>{
    return(
        <TouchableOpacity style={style.container}>
            <View style={style.contato}>
                <Text>{props.dado.sigla}</Text>
            </View>
            <Text style={style.nome}>{props.dado.nome}</Text>
        </TouchableOpacity>
    )

}



export default Contato