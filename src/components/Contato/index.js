import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Context from "../../context/context";
import style from "./style";
const Contato = (props)=>{

    const {setModalConfirma,setChavePix} = useContext(Context)

    return(
        <TouchableOpacity onPress={()=>{
            setModalConfirma(true)
            setChavePix(props.dado.pix)
            console.log(props.dado.pix);
        }} style={style.container}>
            <View style={style.contato}>
                <Text>{props.dado.sigla}</Text>
            </View>
            <Text style={style.nome}>{props.dado.nome.toUpperCase()}</Text>
        </TouchableOpacity>
    )

}



export default Contato