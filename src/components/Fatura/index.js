import React from "react";

import style from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, TouchableOpacity, Image } from "react-native";

const Fatura = (props) => {
    return (
        <TouchableOpacity style={style.container}>
            <View style={{width:"85%"}}>
            
            <Icon style={{ marginTop: 15,  }} name="credit-card-chip-outline" color="#000" size={30} />

                <View style={style.boxT}>
                    <Text style={style.title}>Cartão de crédito</Text>
                    <Icon  name="chevron-right"color="#000" size={30} />


                </View>

                <Text style={style.subTitle}>Fatura atual</Text>
                <Text style={style.saldo}>R$ 22,16</Text>
                <Text style={style.subTitle}>Limite disponivel de R$ 200,56</Text>
                <TouchableOpacity style={style.btn}>
                    <Text style={{color:"black",fontWeight:"700"}}>Parcelar compras</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )

}


export default Fatura