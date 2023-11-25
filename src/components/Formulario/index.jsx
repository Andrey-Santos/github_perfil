import { useState, useEffect } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        // console.log('Estado nome mudou alterado!');
    }, [nome]);

    useEffect(() => {
        // console.log('o componente ente iniciou')
    }, []);

    useEffect(() => {
        // return () => console.log('o componente ente foi desmontado');
    }, []);

    const rendereizaResultado = () => {
        const soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC);
        const media = soma / 3;

        if (nome !== '') {
            if (media >= 7) {
                return <p>Olá {nome} Você foi aprovado!</p>
            } else {
                return <p>Olá {nome} Você não foi aprovado!</p>
            }
        }
    }
    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                        <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={evento => setNome(evento.target.value)} />
            <input type="number" placeholder="Nota máteria A" onChange={evento => setMateriaA(evento.target.value)} />
            <input type="number" placeholder="Nota máteria B" onChange={evento => setMateriaB(evento.target.value)} />
            <input type="number" placeholder="Nota máteria C" onChange={evento => setMateriaC(evento.target.value)} />
            <p>{rendereizaResultado()}</p>
        </form>
    )
}

export default Formulario