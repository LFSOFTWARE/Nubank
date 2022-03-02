import React, { useContext, useState } from "react";
import { Modal, View, Text, FlatList, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "../../../pages/index/style";
import styleL from "./style"

import InputChave from "../../InChave";
import Contato from "../../Contato";
const ModalContato = (props) => {

    const { setContato, modalContato } = useContext(props.contexto)

    const [valor, setValor] = useState('R$ 5,60')



    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalContato}
            onRequestClose={() => {
                setContato(!modalContato)
            }}
        >

            <ScrollView style={style.modal} >
                <View style={style.iconPix}>
                    <Icon onPress={setContato} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
                    <Icon style={{ marginLeft: "76%" }} name="qrcode" color="#000" size={30} />
                </View>
                <View>
                    <Text style={style.saldo}>Para quem você quer transferir R$ {valor}?</Text>
                    <Text style={{ marginLeft: 25, color: 'black', fontSize: 18, marginTop: 10 }}>
                        Encontre um contato na sua lista ou inicia uma nova transfernêcia <Text style={{ fontWeight: "bold" }}>{"R$ 5,56"}</Text></Text>
                </View>
                <View>
                    <InputChave />
                </View>
                <View>
                    <Text style={styleL.text}>Contatos frequentes</Text>

                    <FlatList

                        data={[1, 2, 4]}
                        horizontal
                        renderItem={(item,index) => (
                            <View  key={index} style={{ justifyContent: "center", alignItems: "center" }}>
                                <View style={styleL.contato}>

                                    <Text style={{ fontSize: 18, color: "black", fontWeight: "600" }}>LS</Text>

                                </View>
                                <Text style={{ fontSize: 18, color: "black", fontWeight: "600", marginLeft: 35 }}>Luiz</Text>

                            </View>
                        )}

                    />
                </View>
                <View style={{marginTop:50}} >
                    <Text style={styleL.text}>Contatos frequentes</Text>
                    <FlatList

                        data={[1, 2,2,3]}
                        renderItem={(item,index) => (<Contato key={index} />)}

                    />
                </View>
            </ScrollView>

        </Modal>

    )
}

export default ModalContato