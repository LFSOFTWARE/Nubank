import React, { createContext, useContext, useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Modal } from "react-native";

import style from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../../components/header";
import Saldo from "../../components/Saldo";
import Actions from '../../components/Actions'
import Card from "../../components/Card";
import Section from "../../components/Section";
import More from "../../components/More";
import Fatura from "../../components/Fatura";

import api from "../../services/api";
const Contexto = createContext()

import ModalTranf from "../../components/Modal/ModalTranf";
import ModalPix from "../../components/Modal/ModalPix";
import ModalContato from '../../components/Modal/ModalContato'
import ModalConfirma from "../../components/Modal/ModalConfirma";
import Context from "../../context/context";
const Index = () => {

  //Controll of visibility of modals
  //Modal confirma
  const [modalConfirma, setModalConfirma] = useState(false);

  //INICIO - Area pix
  const [modaPix, setModalPix] = useState(false);

  //Area pix - Transferir
  const [modalTransf, setModalTranf] = useState(false);
  //Area pix - Contato
  const [modalContato, setModalContato] = useState(false);

  const [usuario,setUsuario] = useState(null)
  //variaveis necessarias

  const [ValorTransf, setValorTransf] = useState(null);
  const [valor, setValor] = useState(null);

  const [chavePix, setChavePix] = useState("teste");
  const [filtoR, setFiltroR] = useState('')


  const setPix = () => {
    setModalPix(!modaPix)
  }

  const setTranf = () => {
    setModalTranf(!modalTransf)
  }

  const setContato = () => {
    setModalContato(!modalContato)
  }
  async function saldo() {

    const response = await AsyncStorage.getItem("@user")
    const convertido = JSON.parse(response)
    const eu = convertido[0]
    const result = await api.get(`/usuario/${eu.pix}`)

    const user = result.data
    setValor(user[0].saldo)
    setUsuario(user[0].nome)
  }

  useEffect(() => {
    saldo()
  }, [modaPix])



  return (
    <ScrollView style={style.container}>
      <Context.Provider value={{usuario}} >
       <Header  />

      </Context.Provider>

      <View style={style.body}>
        <Saldo saldo={parseFloat(valor).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} />

        <Contexto.Provider value={{ setPix }} >
          <Actions contexto={Contexto} />
        </Contexto.Provider>

        <TouchableOpacity style={[style.cardCard,{backgroundColor:"#F0F1F5"}]}>
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

      <Contexto.Provider value={{
        modaPix, modalTransf, setTranf, setPix, setContato, modalContato,
        ValorTransf, setValorTransf, modalConfirma, setModalConfirma,
        chavePix, setChavePix, filtoR,valor


      }}>
        <ModalPix contexto={Contexto} />
        <ModalTranf contexto={Contexto} />
        <ModalContato contexto={Contexto} />
        <ModalConfirma contexto={Contexto} />
      </Contexto.Provider>





    </ScrollView>
  )

}



export default Index