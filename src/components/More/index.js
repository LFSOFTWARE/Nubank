import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import style from "./style";

const Item = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>Descubra Mais</Text>
            <FlatList
                data={[
                    {titulo:'Portabilidade de Salário',desc:'Sua Liberdade financeira começa com você escolhendo'},
                    {titulo:'Indique seus amigos', desc:'Mostre aos seus amigos como é fácil ter uma vida sem ...'},
                    {titulo:'WhatsApp',desc:'Pagamentos seguros,rápidos e sem tarifa.A experiência ...'}
              
                ]}
                renderItem={({ item, index }) => (
                    <View style={[style.card,
                    { marginRight: index === 3 ? 30 : 0 }]}>
                        <Image style={{ width: "100%", borderRadius: 6 }} source={require("../../img/img3.png")} />
                        <Text style={style.text}>{item.titulo}</Text>
                        <Text style={{ padding: 10, marginLeft: 20, fontSize: 18 }}>
                            {item.desc}
                        </Text>

                        <TouchableOpacity style={style.btn}>
                            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Conhecer</Text>
                        </TouchableOpacity>
                    </View>
                )}
                horizontal

                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const More = () => {
    return (
        <Item />
    )
}



export default More