
import Formulario from '@component/components/Formulario'
import Layout from '@component/components/Layout'
import Botao from '@component/components/botao'
import Tabela from '@component/components/tabela'
import useClientes from '@component/hooks/useClientes'

export default function Home() {

  const { clienteSelecionado, clienteExcluido,
    salvarCliente, novoCliente,
    obterTodos, cliente,
    clientes, tabelaVisivel, exibirTabela} = useClientes()
  return (
    <>
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to bg-purple-500 
      text-white`
      }>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel? (
        <>
          
            <div className='flex justify-end'>
              <Botao
               cor='blue'
               className='mb-4'
               onClick={novoCliente}
               >Novo Cliente</Botao>
            </div>

            <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
            />
        </>
        
        ):(
         <Formulario 
         cliente={cliente}
         clienteMudou={salvarCliente}
         cancelado={()=> exibirTabela}
         />
        )}
      </Layout>
    </div>
    </>
  )
}
