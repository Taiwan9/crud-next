import { useState } from "react";
import Entrada from "./Entrada";
import Client from "@component/core/Client";
import Botao from "./botao";

interface FormularioProps {
    cliente: Client
    cancelado?:()=>void
    clienteMudou?: ( cliente: Client)=> void
}

export default function Formulario(props:FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
       <div>
            {id?(
                <Entrada
                somenteLeitura
                 texto="Código" 
                 valor={id}
                 className="mb-4"/>                 
            ): false}

            <Entrada
             texto="Nome" 
             valor={nome}
             valorMudou={setNome}
             className="mb-4"/>

            <Entrada 
            texto="Idade" 
            tipo="number" 
            valor={idade}
            valorMudou={setIdade}
            className="mb-4"/>

            <div className="mt-7 flex justify-end">
                <Botao cor="gray" className="mr-3 bg-gradient-to-r from-blue-300 to-blue-600"
                    onClick={()=>props.clienteMudou?.(new Client(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao cor="green"
                 className="bg-gradient-to-r from-gray-300 to-gray-700"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
       </div>
    )
}