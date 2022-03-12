
import React, { useContext, useEffect, useState } from "react";
import { Modal, View, ScrollView, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from '../../../services/api.js'

const Container = (props) => {
    return (
        <View style={style.container}>
            <Text style={{ fontSize: 16 }}>{props.sub}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>{props.titulo}</Text>
                <Icon style={style.icon} name="chevron-down" size={30} />
            </View>
        </View>
    )
}

const Information = (props) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <Text style={{ fontSize: 18, color: "#9899A1" }}>{props.titulo}</Text>
            <Text style={{ fontSize: 18, color: "black", fontWeight: "600" }}>{props.valor}</Text>

        </View>
    )
}



const InputSenha = () => {
    return (
        <TextInput
            style={style.input}
            onChangeText={() => {
                console.log('oi');
            }}
            keyboardType="numeric"

        />
    )
}




const ModalConfirma = (props) => {

    const { modalConfirma, setModalConfirma, chavePix, ValorTransf, filtoR,setContato,setTranf,setPix } = useContext(props.contexto)

    const [user, setUser] = useState(null)
    const [eu, setEu] = useState(null)
    const [senha, setSenha] = useState(null)

    const getUser = async () => {

        try {

            const result = await api.get(`/usuario/${chavePix}`)
            const user = result.data
            const response = await AsyncStorage.getItem("@user")
            const convertido = JSON.parse(response)
            const eu = convertido[0]


            try {
                setUser(user[0])
                setEu(eu)
            } catch (error) {
                setUser({})
                setEu({})

            }

        } catch (error) {
            alert(error.message)
        }

    }
    useEffect(() => {
        getUser()
    }, [chavePix])


    const tranferir = async () => {
        const dados = {
            valor: ValorTransf,
            para: chavePix,
            de: eu.pix
        }
        const result = await api.post('/transferir', dados)
        console.log(result.data.message);
    }
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalConfirma}
                onRequestClose={() => {
                    setModalConfirma(!modalConfirma)
                }}
            >

                <View style={style.modal}>
                    <Text style={style.text}>Transferindo {filtoR} </Text>
                    <View>
                        <Text style={style.valor}>{ValorTransf}<Icon name="pencil-outline" size={30} /> </Text>

                    </View>

                    <Text style={{ paddingHorizontal: 20, fontSize: 18, marginTop: 8 }}>para <Text style={style.nome}>{user == null ? " " : user.nome.toUpperCase()}</Text></Text>
                    <TouchableOpacity>
                        <Text style={style.textMensagem}> <Icon name="comment-text-outline" size={20} /> Escreva uma mensagem...</Text>

                    </TouchableOpacity>
                    <Container sub="Quando" titulo="Agora" />
                    <Container sub="Tipo de tranferência" titulo="Agora" />
                    <View style={style.dadosBancarios}>
                        <Information titulo="CPF" valor="...541952..." />
                        <Information titulo="Instituição" valor="Nubank S.A" />
                        <Information titulo="Agência" valor="9202" />
                        <Information titulo="Conta corrente" valor="95719-4" />

                    </View>
                    <TouchableOpacity onPress={() => {
                        tranferir()
                        setModalConfirma(false)
                        setContato(false)
                        setTranf()
                        setPix()


                    }} style={style.btn}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Transferir</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={senha}
                style={{ marginTop: 50 }}
                onRequestClose={() => {
                    setModalConfirma(!modalConfirma)
                }}>

                <View style={style.containerSenha}>
                    <View >
                        <Icon onPress={() => {
                            setSenha(false)
                        }} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
                        <Text style={{marginLeft: 10 ,fontSize:19,color:"black",marginTop:10}}>Digite sua <Text style={{color:"blue"}}>senha de 4 digitos</Text></Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",marginTop:30,marginLeft:20}}>
                    <InputSenha />
                    <InputSenha />
                    <InputSenha />
                    <InputSenha />

                    </View>
                    <TouchableOpacity onPress={() => {
                       tranferir
                    }} style={[style.btn,{marginTop:"90%"}]}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Transferir</Text>
                    </TouchableOpacity>
                </View>

            </Modal> */}
        </>

    )
}


export default ModalConfirma