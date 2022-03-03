import React, { useState, useContext } from "react";

import style from './style'
import { TextInputMask } from 'react-native-masked-text'
import Contexto from '../../context/context'



const InputChave = () => {
  const [valor2, setValor] = useState(null);
  const { fSetPesquisa, fSetPesquisaFalse, setPix,setFiltro,pesquisaContato} = useContext(Contexto)

  return (

    <>

      <TextInputMask
        type={'cel-phone'}
        onFocus={fSetPesquisaFalse}
        
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}

        style={style.input}
        placeholder="(11) 9999-99999"
        onChangeText={text => {
          setValor(text)
          setPix(text)
          setFiltro(text)
        }}


      />



    </>

  )
}



export default InputChave