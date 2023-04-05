import ColecaoCliente from "@component/backend/db/ColecaoClientes"
import Client from "@component/core/Client"
import ClienteRepositorio from "@component/core/ClienteRepositorio"
import { useState, useEffect } from "react"
import useTabelaOuForm from "./UseTabelaOuForm"

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {exibirFormulario, exibirTabela, formularioVisivel, tabelaVisivel} = useTabelaOuForm()

    const [cliente,setCliente] = useState<Client>(Client.vazio()) 
    const [clientes,setClientes] = useState<Client[]>([]) 

  
    useEffect(obterTodos, [])
  
    function obterTodos(){
      repo.obterTodos().then((clientes)=>{
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function clienteSelecionado(client:Client){
      setCliente(client)
     exibirFormulario()
    }
  
  async function clienteExcluido(client:Client){
      await repo.excluir(cliente)
      obterTodos() 
    }
  
    function novoCliente(){
      setCliente(Client.vazio())
      exibirFormulario()
    }
  
   async function salvarCliente(cliente:Client){
      await repo.salvar(cliente)
      obterTodos() 
    }
    
    return{
        cliente,
        clientes,   
        novoCliente,
        salvarCliente,
        clienteExcluido,
        clienteSelecionado,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}