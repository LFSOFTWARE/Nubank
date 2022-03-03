import React, { createContext, useContext, useState } from "react";
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


const Contexto = createContext()

import ModalTranf from "../../components/Modal/ModalTranf";
import ModalPix from "../../components/Modal/ModalPix";
import ModalContato from '../../components/Modal/ModalContato'

const Index = () => {

  //Controll of visibility of modals
  //INICIO - Area pix
  const [modaPix, setModalPix] = useState(false);

  //Area pix - Transferir
  const [modalTransf, setModalTranf] = useState(false);
  //Area pix - Contato
  const [modalContato, setModalContato] = useState(false);

  const [ValorTransf,setValorTransf] = useState(null);


  const setPix = () => {
    setModalPix(!modaPix)
  }

  const setTranf = () => {
    setModalTranf(!modalTransf)
  }

  const setContato = () => {
    setModalContato(!modalContato)
  }


  return (
    <ScrollView style={style.container}>

      <Header />

      <View style={style.body}>
        <Saldo saldo={'60,00'} />

        <Contexto.Provider value={{ setPix }} >
          <Actions contexto={Contexto} />
        </Contexto.Provider>

        <TouchableOpacity style={style.cardCard}>
          <Icon style={{ marginLeft: 10, transform: [{ rotate: '90deg' }] }} name="credit-card-chip-outline" color="#000" size={30} />
          <Text style={style.cardText}>Meus Cartões </Text>
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

      <Contexto.Provider value={{ modaPix, modalTransf, setTranf, setPix,setContato,modalContato,ValorTransf,setValorTransf }}>
        <ModalPix contexto={Contexto} />
        <ModalTranf contexto={Contexto} />
        <ModalContato  contexto={Contexto}/>
      </Contexto.Provider>





    </ScrollView>
  )

}



export default Index