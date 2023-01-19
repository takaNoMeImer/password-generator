import React, { useEffect, useState } from 'react';
import { FiCopy, GrFormNextLink } from 'react-icons/all';
import Message from './Message';
import { UseApp } from '../hooks/useApp';

const Home = () => {

    const {password, longitud, setPassword, setLongitud, haveNumber, haveSymbol, haveUppercase, setHaveNumbers, setHaveUppercase, setHaveSymbol, generar } = UseApp();
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        setPassword("Generar");
    }, [])


    return (
        <>
            {
                active == true &&
                <Message/>
            }
            <div className='home'>
                <p style={{ textAlign: 'center' }} className='has-text-white is-size-4 mb-4'>Password Generator</p>

                <div className="homeInput has-background-dark p-3 mb-3">
                    <p>{password}</p>
                    <FiCopy cursor={'pointer'} className='copy' color='white' onClick={() => {
                        navigator.clipboard.writeText(password),
                        setActive(true),
                            setTimeout(() => {
                                setActive(false)
                            }, 2000);
                    }} />
                </div>

                <div className="homeBody has-background-dark p-3">
                    <div className="homeBodyInfo">
                        <p>Longitud</p>
                        <p>{longitud}</p>
                    </div>
                    <div className="homeBodyRange mb-3">
                        <input onChange={(e) => setLongitud(parseInt(e.target.value))} type="range" name="" id="" min={0} max={20} defaultValue={12} step={1} />
                    </div>
                    <div className="homeBodyCheck mb-3">
                        <label className="checkbox mb-2 has-text-white">
                            <input onChange={() => setHaveNumbers(!haveNumber)} className='mr-2' type="checkbox" />
                            Incluir Numeros
                        </label>

                        <label className="checkbox mb-2 has-text-white">
                            <input onChange={() => setHaveUppercase(!haveUppercase)} className='mr-2' type="checkbox" />
                            Incluir Mayusculas
                        </label>

                        <label className="checkbox mb-2 has-text-white">
                            <input onChange={() => setHaveSymbol(!haveSymbol)} className='mr-2' type="checkbox" />
                            Incluir Simbolos
                        </label>
                    </div>
                    <div className="homeBodyButton">
                        <button onClick={generar} className="button has-text-black is-success is-fullwidth">Generar <GrFormNextLink color='white' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;