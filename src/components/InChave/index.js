import React, {  useState } from "react";

import style from './style'
import { TextInputMask } from 'react-native-masked-text'



const InputChave = () => {
    const [valor, setValor] = useState(null);
    return (

        <>
        
        <TextInputMask
             type={'cel-phone'}
             options={{
               maskType: 'BRL',
               withDDD: true,
               dddMask: '(99) '
             }}
            style={style.input}
             placeholder="(11) 9999-99999"
            onChangeText={text => {
              setValor(text)

             
            }}

            
        />

   

        </>

    )
}



export default InputChave