import React, { createContext, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Modal } from "react-native";

import style from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import Header from "../../components/header";
import Saldo from "../../components/Saldo";
import Actions from '../../components/Actions'
import Card from "../../components/Card";
import Section from "../../components/Section";
import More from "../../components/More";
import Fatura from "../../components/Fatura";
import Options from "../../components/Options"
const Contexto = createContext()



const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const set = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <ScrollView style={style.container}>

      <Header />
      <View style={style.body}>
        <Saldo saldo={'60,00'} />

        <Contexto.Provider value={{ set }} >
          <Actions sec="inicio" contexto={Contexto} />
        </Contexto.Provider>

        <TouchableOpacity style={style.cardCard}>
          <Icon style={{ marginLeft: 10, transform: [{ rotate: '90deg' }] }} name="credit-card-chip-outline" color="#000" size={30} />

          <Text style={style.cardText}>Meus cartões</Text>
        </TouchableOpacity>
        <Card />
        <View style={{ marginTop: 25 }} />
        <Fatura />
        <Section sinal="hand-coin-outline" title="Empréstimo" desc="Crie um aviso para saber quando um empréstimo ficar disponivel" />
        <Section sinal="signal" title="Investimento" desc="o jeito Nu de investir: sem asteriscos, linguagem fácil e a partir de R$1." />
        <Section sinal="cards-heart-outline" title="Seguro de vida" desc="Conheça Nubank vida: um seguro simples e que cabe no bolso." />
        <Section sinal="bag-personal-outline" title="Shopping" desc="Vantagens exclusivas das nossas marcas preferidas" />
        <More />

      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >

        <ScrollView style={style.modal} >
          <View style={style.iconPix}>
            <Icon onPress={set} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
            <Icon style={{ marginLeft: 10 }} name="progress-question" color="#000" size={30} />

          </View>
          <Text style={style.saldo}>Enviar</Text>
          <Options item={[
          { icon: 'cash-remove', text: "Transferir" },
          { icon: 'rhombus-split-outline', text: "Área Pix" },
          { icon: 'barcode', text: "Pagar" },
          
          ]} />
        </ScrollView>
      </Modal>

    </ScrollView>
  )

}



export default Index