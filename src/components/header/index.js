import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "../../pages/index/style";

const Header = () => {
    return (
        <View style={style.header}>
            <View style={style.iconsTop}>
                <TouchableOpacity style={style.iconUser}>
                    <Icon name="account" color="#fff" size={35} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={[style.icons, { marginLeft: 90 }]}>
                        <Icon name="eye" color="#fff" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.icons]}>
                        <Icon name="progress-question" color="#fff" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.icons}>
                        <Icon name="email-plus" color="#fff" size={30} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.nameUser}>
                <Text style={style.text}>Olá, Luiz</Text>
            </View>
        </View>
    )
}


export default Header