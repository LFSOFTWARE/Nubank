import React, { useContext, useState, useEffect } from "react";
import { Modal, View, Text, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "../../../pages/index/style";
import styleL from "./style"

import InputChave from "../../InChave";
import Contato from "../../Contato";
import { LogBox } from 'react-native';

import Contexto from '../../../context/context'

import api from "../../../services/api";

const Container = ({ dados }) => {

    const { setModalConfirma, setChavePix } = useContext(Contexto)

    return (
        <Contexto.Provider value={{ setModalConfirma, setChavePix }} >
            <View style={{ marginTop: 50 }} >
                <Text style={styleL.text}>Contatos frequentes</Text>
                <FlatList

                    data={dados}
                    renderItem={({ item, index }) => (<Contato dado={item} />)}

                />
            </View>
        </Contexto.Provider>
    )
}


const Contatos = (props) => {

    const { setModalConfirma, setChavePix } = useContext(Contexto)
    return (
        <View>
            <Text style={styleL.text}>Contatos frequentes</Text>

            <FlatList

                data={props.dados}
                horizontal
                renderItem={(item, index) => (
                    <TouchableOpacity onPress={()=>{
                        setModalConfirma(true)
                        setChavePix(item.item.pix)

                    }} key={index}  style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styleL.contato}>

                            <Text style={{ fontSize: 18, color: "black", fontWeight: "600" }}>{item.item.sigla}</Text>

                        </View>
                        <Text style={{ fontSize: 18, color: "black", fontWeight: "600", marginLeft: 35 }}>{item.item.nome.split(' ')[0]}</Text>

                    </TouchableOpacity>
                )}

            />
        </View>
    )
}



const ModalContato = (props) => {









    


    const [filtoR, setFiltroR] = useState('')

    const { setContato, modalContato, ValorTransf, modalConfirma, setModalConfirma, setChavePix } = useContext(props.contexto)


    const [pesquisa, setPesquisa] = useState(true)

    const [pix, setPix] = useState(null)

    const [filto, setFiltro] = useState('')

    const [contatos, setContatos] = useState([])


    const fSetPesquisaFalse = () => {
        setPesquisa(false)
    }
    const fSetPesquisa = () => {
        setPesquisa(!pesquisa)
    }
  
    async function dadosT() {
        try {
            const response = await api.get("/usuarios")

            const res = response.data

            setContatos(res)

        } catch (error) {
            alert(error.message)
        }
    }

    function pesquisaContato() {
        let result = contatos.filter(item => item.pix.includes(filto))
        setFiltroR(result)
    }

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])


    useEffect(() => {

        pesquisaContato()
        dadosT()

    }, [filto,ValorTransf])



    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalContato}
            onRequestClose={() => {
                setContato(!modalContato)
            }}
        >

            <ScrollView


                style={styleL.modal} >
                <View style={style.iconPix}>
                    <Icon onPress={setContato} style={{ marginLeft: 10 }} name="close" color="#000" size={30} />
                    <Icon style={{ marginLeft: "76%" }} name="qrcode" color="#000" size={30} />
                </View>
                <View>
                    <Text style={style.saldo}>Para quem você quer transferir R$ {ValorTransf}?</Text>
                    <Text style={{ marginLeft: 25, color: 'black', fontSize: 18, marginTop: 10 }}>
                        Encontre um contato na sua lista ou inicia uma nova transfernêcia <Text style={{ fontWeight: "bold" }}>R$ {ValorTransf}</Text></Text>
                </View>
                <Contexto.Provider value={{ setChavePix, fSetPesquisa, fSetPesquisaFalse, setPix, setFiltro, setModalConfirma, filtoR }}>
                    <View>

                        <InputChave />

                    </View>
                   

                            <Contatos dados={filtoR} />
                            <Container dados={filtoR} />
                       
                   

                </Contexto.Provider>


            </ScrollView>


        </Modal>

    )
}

export default ModalContato