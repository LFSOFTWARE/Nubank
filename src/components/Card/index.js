import React from "react";
import { FlatList, Text, View } from "react-native";
import style from "./style";


const Item = () => {
    return (
        <View style={style.cardItem}>
            <Text style={style.text}>Seu <Text style={{color:'#8958AB'}}> informe de rendimentos </Text> 2021 já está disponivel</Text>
        </View>
    )
}

const Card = () => {
    return (
        <View style={style.container}>
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={() => (<Item />)}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )

}


export default Card