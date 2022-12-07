import React from 'react';
import { ButtonContainer, Button1} from './styles';

function Button({onClick}){
    return(
        <ButtonContainer onClick={onClick}>
                <p>Cadastrar</p>
        </ButtonContainer>


        
    )
}

export default Button