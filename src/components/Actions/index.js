import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const Item = (props) => {
    return (
        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={style.item}>
                <Icon name={props.icon} style={style.icon} color="#000" size={30} />
            
            </View>
            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}


const Actions = () => {
    return (
        <View style={style.container}>
            <FlatList
                style={style.lista}
                data={[
                    { icon: 'rhombus-split-outline', text:"Área Pix"},
                    { icon: 'barcode', text:"Pagar"},
                    { icon: 'cash-remove', text:"Transferir"},
                    { icon: 'cash-check', text:"Depositar"},
                    { icon: 'cellphone', text:"Recarga"},
                    { icon: 'database-plus-outline', text:"Cobrar"},
                    { icon: 'cards-heart-outline', text:"Doação"},
                    { icon: 'earth-arrow-right', text:"Internacional"}
                    
                ]}

                renderItem={(item) => (
                    <Item icon={item.item.icon} text={item.item.text} />

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}


export default Actions;