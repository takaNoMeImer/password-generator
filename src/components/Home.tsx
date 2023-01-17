import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { FiCopy, GrFormNextLink } from 'react-icons/all';
import { generator } from 'ts-password-generator';

const Home = () => {

    const [password, setPassword] = useState<string>('none');
    const [longitud, setLongitud] = useState<number>(0);

    useEffect(() => {
        setPassword("Generar");
        setLongitud(0);
    }, [])

    const generar = () => {
        setPassword(generator({haveNumbers: true, haveSymbols: true}));
    }

    return (
        <>
            <div className='home'>
                <p style={{textAlign: 'center'}} className='has-text-white is-size-4 mb-4'>Password Generator</p>

                <div className="homeInput has-background-dark p-3 mb-3">
                    <p>{password}</p>
                    <FiCopy color='white' />
                </div>

                <div className="homeBody has-background-dark p-3">
                    <div className="homeBodyInfo">
                        <p>Longitud</p>
                        <p>{password.length}</p>
                    </div>
                    <div className="homeBodyRange mb-3">
                        <input type="range" name="" id="" />
                    </div>
                    <div className="homeBodyCheck mb-3">
                        <label className="checkbox mb-2 has-text-white">
                            <input className='mr-2' type="checkbox" />
                                Incluir Numeros
                        </label>

                        <label className="checkbox mb-2 has-text-white">
                            <input className='mr-2' type="checkbox" />
                                Incluir Mayusculas
                        </label>

                        <label className="checkbox mb-2 has-text-white">
                            <input className='mr-2' type="checkbox" />
                                Incluir Simbolos
                        </label>
                    </div>
                    <div className="homeBodyButton">
                    <button onClick={generar} className="button has-text-black is-success is-fullwidth">Generar <GrFormNextLink color='white'/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;