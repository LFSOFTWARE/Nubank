import React,{useContext} from "react";
import { Modal, View, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "../../../pages/index/style";

const ModalTranf = (props) => {

  const {modalTransf, setTranf} = useContext(props.contexto)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalTransf}
      onRequestClose={() => {
        setTranf(!modalTransf)
      }}
    >

      <ScrollView style={style.modal} >
        <View style={style.iconPix}>
          <Icon onPress={setTranf} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
          <Icon style={{ marginLeft: 10 }} name="qrcode" color="#000" size={30} />

        </View>
      </ScrollView>

    </Modal>
  )
}

export default ModalTranf