
import React, { useContext } from "react";
import { Modal, View, ScrollView, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "../../../pages/index/style";

import Options from "../../../components/Options"
import Section from "../../../components/Section";

const ModalPix = (props) => {

    const {modaPix, setPix, setTranf} = useContext(props.contexto)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modaPix}
            onRequestClose={() => {
                setPix(!modaPix)
            }}
        >

            <ScrollView style={style.modal} >
                <View style={style.iconPix}>
                    <Icon onPress={setPix} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
                    <Icon style={{ marginLeft: 10 }} name="progress-question" color="#000" size={30} />

                </View>

                <View>
                    <Text style={[style.saldo]}>Área Pix</Text>
                    <Text style={{marginLeft:20,fontSize:20,marginTop:10,paddingRight:20}}>Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso.</Text>
                    <Text style={[style.saldo,{fontSize:25}]}>Enviar</Text>


                    <Options item={[
                        { icon: 'cash-remove', text: "Transferir", on: setTranf },
                        { icon: 'content-copy', text: "Pix Copia e Cola" },
                        { icon: 'qrcode', text: "Ler QR code" },
                    ]} />





                    <Text style={[style.saldo,{fontSize:25}]}>Receber</Text>

                    <Options item={[
                        { icon: 'database-plus-outline', text: "Cobrar" },
                        { icon: 'cash-check', text: "Depositar" }

                    ]} />
                </View>

                <View style={{ marginTop: 50, marginBottom: 30 }}>
                    <Section signal="0" title="Registar ou Trazer chaves" desc="Registre uma nova chave ou faça uma portabilidade para o Nubank." />
                    <Section signal="0" title="Configure Pix" desc="Gerencie seu limite diário de trasnferências ou suas chaves Pix." />

                </View>


            </ScrollView>



        </Modal>

    )
}


export default ModalPix