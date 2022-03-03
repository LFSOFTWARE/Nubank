import React, { useContext, useState } from "react";
import { Modal, View, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "../../../pages/index/style";
import Input from "../../input";

import Context from '../../../context/context'


const ModalTranf = (props) => {

  const { modalTransf, setTranf,setContato,setValorTransf } = useContext(props.contexto)

  const [enviar, setEnviar] = useState(false)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalTransf}
      onRequestClose={() => {
        setTranf(!modalTransf)
      }}
    >

      <View style={style.modal} >
        <View style={style.iconPix}>
          <Icon onPress={setTranf} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
          <Icon style={{ marginLeft: "76%" }} name="qrcode" color="#000" size={30} />
        </View>
        <View>
          <Text style={style.saldo}>Qual é o valor da tranferência?</Text>
          <Text style={{ marginLeft: 25, color: 'black', fontSize: 18, marginTop: 10 }}>Saldo disponivel em conta <Text style={{ fontWeight: "bold" }}>{"R$ 5,56"}</Text></Text>
        </View>
        <View>
          <Context.Provider value={{ setEnviar, enviar,setValorTransf }}>
            <Input />

          </Context.Provider>
        </View>
        <View>
          <TouchableOpacity onPress={
            enviar == true ?
            setContato
            : null


          }


            style={[style.btnEnviar,
            { backgroundColor: enviar == false ? "#F0F1F5" : "#830AD1" }]

            }>
            <Icon name="chevron-right" color={enviar == false ? "#000" : "#fff"} size={30} />
          </TouchableOpacity>
        </View>
      </View>

    </Modal>

  )
}

export default ModalTranf