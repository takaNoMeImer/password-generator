import {useState} from 'react';
import { generator } from 'ts-password-generator';

export const UseApp = () => {

    const [stateModal, setStateModal] = useState<string>('');
    const [password, setPassword] = useState<string>('none');
    const [longitud, setLongitud] = useState<number>(12);
    const [haveNumber, setHaveNumbers] = useState<boolean>(false);
    const [haveSymbol, setHaveSymbol] = useState<boolean>(false);
    const [haveUppercase, setHaveUppercase] = useState<boolean>(false);

    const generar = () => {
        setPassword(generator({haveNumbers: haveNumber, charsQty: longitud , haveSymbols: haveSymbol, isUppercase: haveUppercase}));
    }

    const handleClick = () => {
        navigator.clipboard.writeText(password);
        setStateModal('is-active')
        console.log(stateModal);
    }

    return {
        stateModal, password,longitud,haveNumber,haveSymbol,haveUppercase,
        setStateModal, setPassword, setLongitud,setHaveNumbers,setHaveSymbol,setHaveUppercase,generar,handleClick
    }
}