import Client from "@component/core/Client"
import { IconeEdicao, IconeLixo } from "./Icons"

interface TabelaProps{
    clientes: Client[]
    clienteSelecionado?:(cliente:Client)=>void
    clienteExcluido?:(cliente:Client)=>void
}

export default function Tabela(props:TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                { exibirAcoes ? <th className="p-4">Ações</th>: false}
            </tr>
        )

    }

    function renderizarDados(){
        return props.clientes?.map((client, i) =>{
            return(
            <tr key={client.id} className={`${i%2===0 ? 'bg-purple-200' : 'bg-slate-100'}`}>
                <td className="text-left p-4">{client.id}</td>
                <td className="text-left p-4">{client.nome}</td>
                <td className="text-left p-4">{client.idade}</td>
                {exibirAcoes? renderizarAcoes(client): false}
            </tr>
            )
        })
    }

    function renderizarAcoes(client:Client){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado?(
                    <button onClick={()=> props.clienteSelecionado?.(client)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-100
                `}>
                    {IconeEdicao}
                </button>  
                ): false}

                {props.clienteExcluido?(
                    <button onClick={()=> props.clienteExcluido?.(client)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-100
                `}>
                    {IconeLixo}
                </button>  
                ): false}
            </td>
        )
    }
    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="
                text-gray-100
               bg-gradient-to-r from-purple-500 to-purple-800     
            ">
                {renderizarCabecalho()}
            </thead>

            <tbody>
                {renderizarDados()}
            </tbody>
     
        </table>
    )
}