import React from "react";
import {  TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "../../pages/index/style";
const Saldo = ({saldo})=>{
    return(
        <TouchableOpacity style={style.sectionConta}>
        <View style={style.nameUser}>
            <Text style={[style.text, { color: "black", marginTop: 10 }]}>Conta</Text>
            <Icon style={{marginLeft:220, marginTop: 15 }} name="chevron-right" color="#000" size={30} />

        </View>

        <Text style={style.saldo}>
            R$ {saldo}



        </Text>
    </TouchableOpacity>
    )
}


export default Saldo