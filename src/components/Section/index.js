import React from "react";

import style from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, TouchableOpacity } from "react-native";

const Section = (props) => {
    return (
        <TouchableOpacity style={style.container}>
            <View style={{width:"85%"}}>

                { props.signal != "0" && 
                              <Icon name={props.sinal} style={style.icon} color="#000" size={30} />

                }

                <View style={style.boxT}>
                    <Text style={style.title}>{props.title}</Text>
                    <Icon  name="chevron-right"color="#000" size={30} />


                </View>

                <Text style={style.text}>{props.desc}</Text>
            </View>
        </TouchableOpacity>
    )

}


export default Section