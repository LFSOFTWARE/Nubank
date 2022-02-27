import React from "react";

import style from "./style";
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import Header from "../../components/header";
import Saldo from "../../components/Saldo";
import Actions from '../../components/Actions'
import Card from "../../components/Card";
import Section from "../../components/Section";
import More from "../../components/More";
import Fatura from "../../components/Fatura";

const Index = () => {


  return (
    <ScrollView style={style.container}>
      <Header />
      <View style={style.body}>
        <Saldo saldo={'60,00'} />
        <Actions />
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
    </ScrollView>
  )

}



export default Index