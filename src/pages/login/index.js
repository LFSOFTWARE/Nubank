import React, { createContext, useContext, useState,useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, Modal } from "react-native";

import api from '../../services/api'
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import style from "./style";
import { TextInput } from 'react-native-paper';
const Login = ({navigation}) => {
    const [logged,setLogged] = useState(0)


    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const login = async () => {

        try {
            const body = {
                email,
                senha
            }
            const result = await api.post("/login", body)
            console.log(result.data);
            if(result.data.usuario != []){
            await AsyncStorage.setItem('@user',JSON.stringify(result.data.usuario))
            navigation.replace('Home')
            }
        } catch (error) {
            
            console.log(error);
        }
        
    }
    const check = async ()=>{
        const user = await AsyncStorage.getItem('@user')
        console.log(user);
        if(user){
            setLogged(1)
            navigation.replace("Home")
        }else{
            setLogged(2)
        }
    }

    useEffect(()=>{
        check()
    },[])
    return (
        <View style={style.container}>
            <View style={style.boxLogin}>
                <Text style={style.title}>Faça seu Login</Text>

                <TextInput
                    label="Email"
                    value={email}
                    style={style.input}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Senha"
                    value={senha}
                    style={style.input}

                    onChangeText={text => setSenha(text)}
                />
                <TouchableOpacity onPress={login} style={style.btn}>
                    <Text style={{ fontSize: 22, color: "#830AD1" }}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login