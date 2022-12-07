import React from 'react';
import { InputContainer } from './styles';

function Input(){
    return(
        <InputContainer>
            <input placeholder="Nome completo" />

            <input placeholder='Seu melhor email'/>

            <input placeholder='(11)96123-4567'/>

            <input placeholder='Senha' />

            <input placeholder='Confirme sua senha'/>

        </InputContainer>

        
    )
}

export default Input