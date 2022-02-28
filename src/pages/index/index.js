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
  const [modalVisible2, setModalVisible2] = useState(false);


  const set = () => {
    setModalVisible(!modalVisible)
  }

  const set2 = () => {
    setModalVisible2(!modalVisible2)
  }



  return (
    <ScrollView style={style.container}>

      <Header />

      <View style={style.body}>
        <Saldo saldo={'60,00'} />

        <Contexto.Provider value={{ set }} >
          <Actions contexto={Contexto} />
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
          setModalVisible(!modalVisible);
        }}
      >

        <ScrollView style={style.modal} >
          <View style={style.iconPix}>
            <Icon onPress={set} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
            <Icon style={{ marginLeft: 10 }} name="progress-question" color="#000" size={30} />

          </View>

          <View>
            <Text style={style.saldo}>Enviar</Text>


            <Options item={[
              { icon: 'cash-remove', text: "Transferir",on:set2 },
              { icon: 'content-copy', text: "Pix Copia e Cola" },
              { icon: 'qrcode', text: "Ler QR code" },
            ]} />



            <Text style={style.saldo}>Receber</Text>

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
         
          setModalVisible2(!modalVisible2);
        }}
      >

        <ScrollView style={style.modal} >
          <View style={style.iconPix}>
            <Icon onPress={set2} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
            <Icon style={{ marginLeft: 10 }} name="qrcode" color="#000" size={30} />

          </View>

          <View>
           
          </View>

         


        </ScrollView>



      </Modal>

    </ScrollView>
  )

}



export default Index