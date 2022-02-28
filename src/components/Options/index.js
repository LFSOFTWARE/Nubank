import React, { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Item = (props) => {

  
    return (
        <TouchableOpacity   style={{ justifyContent: "center", alignItems: "center" }}>
            
            <View style={style.item}>
                <Icon name={props.icon} style={style.icon} color="#000" size={30} />
            </View>
            
            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}


const Options = (props) => {


   
    
    return (
        <View style={style.container}>
            <FlatList
                style={style.lista}
                data={props.item}

                renderItem={(item) => (
                    <Item icon={item.item.icon}  text={item.item.text} />

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}


export default Options;