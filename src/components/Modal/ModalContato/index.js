import React, { useContext, useState, useEffect } from "react";
import { Modal, View, Text, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from "../../../pages/index/style";
import styleL from "./style"

import InputChave from "../../InChave";
import Contato from "../../Contato";
import { LogBox } from 'react-native';

import Contexto from '../../../context/context'


const Container = ({ dados }) => {
    return (
        <View style={{ marginTop: 50 }} >
            <Text style={styleL.text}>Contatos frequentes</Text>
            <FlatList

                data={dados}
                renderItem={({ item, index }) => (<Contato dado={item} />)}

            />
        </View>
    )
}


const Contatos = (props) => {
    return (
        <View>
            <Text style={styleL.text}>Contatos frequentes</Text>

            <FlatList

                data={props.dados}
                horizontal
                renderItem={(item, index) => (
                    <TouchableOpacity key={index} style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styleL.contato}>

                            <Text style={{ fontSize: 18, color: "black", fontWeight: "600" }}>LS</Text>

                        </View>
                        <Text style={{ fontSize: 18, color: "black", fontWeight: "600", marginLeft: 35 }}>Luiz</Text>

                    </TouchableOpacity>
                )}

            />
        </View>
    )
}



const ModalContato = (props) => {

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        pesquisaContato()
    }, [])



    const { setContato, modalContato, ValorTransf } = useContext(props.contexto)


    const [pesquisa, setPesquisa] = useState(true)

    const [pix, setPix] = useState(null)



    const fSetPesquisaFalse = () => {
        setPesquisa(false)
    }
    const fSetPesquisa = () => {
        setPesquisa(!pesquisa)
    }

    //PESQUISA POR CONTATO

    const [filto, setFiltro] = useState('')

    useEffect(() => {

        pesquisaContato()

    }, [filto])

    const [contatos, setContatos] = useState([
        {
            nome: "LUIZ FERNANDO SILVA DOS SANTOS",
            pix: "(11) 99999-9999",
            sigla: "LS"
        },
        {
            nome: "PEDRO ANTONIO DA SILVA",
            pix: "(11) 99999-9990",
            sigla: "PS"
        },
        ,
        {
            nome: "PEDRO MARCOS SANTOS",
            pix: "(11) 99999-9991",
            sigla: "PS"
        }
    ])

    const [filtoR, setFiltroR] = useState('')

    function pesquisaContato() {
        let result = contatos.filter(item => item.pix.includes(filto))
        setFiltroR(result)
    }


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
                <View>
                    <Contexto.Provider value={{ fSetPesquisa, fSetPesquisaFalse, setPix, setFiltro }}>
                        <InputChave />
                    </Contexto.Provider>

                </View>
                {pesquisa == true &&
                    <>

                        <Contatos dados={filtoR} />
                        <Container dados={filtoR} />
                    </>
                }
                {pesquisa == false &&
                    <>

                        <Container dados={filtoR} />
                    </>
                }



            </ScrollView>


        </Modal>

    )
}

export default ModalContato