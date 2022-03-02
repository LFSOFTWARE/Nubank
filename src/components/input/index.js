import React, { useContext, useState } from "react";

import style from './style'
import { TextInputMask } from 'react-native-masked-text'
import Context from '../../context/context'



const Input = () => {
    const [valor, setValor] = useState(0.00);
    const {setEnviar,enviar} = useContext(Context)
    return (

        <>
        
        <TextInputMask
            type={'money'}
            style={style.input}
            value={valor}
            onChangeText={text => {
              setValor(text)

              if(text != 0.00 && text != "R$0,00"){
                setEnviar(true)

              }else{
                  setEnviar(false)
              }
            }}

            
        />

   

        </>

    )
}



export default Input