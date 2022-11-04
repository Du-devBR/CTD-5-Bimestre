import { useState } from 'react'
import { SetimaAulaCardProduto } from '../../components/SetimaAulaCardComponent'
import './style.scss'

export function SetimaAula(){

  // // let contador = 0
  // const [contador, setContador] = useState(0) //valor inicial no useState
  // const [temaEscuro, setTemaEscuro] = useState(false)

  // function somarNumero(){

  //     setContador(contador + 1) // valor que altera da varivel contador
  // }

  // function darkTheme(){
  //   setTemaEscuro(!temaEscuro) // modificar o thema pelo useState, true ou false
  // }


  // return(            //utilizado ternario para criar a logica
  //     <main className={`setima-aula-component ${temaEscuro ? 'dark-theme' : ''}`}>
  //       <h1>Contador</h1>
  //       <button onClick={somarNumero}>Adicionar</button>
  //       <button onClick={darkTheme}>Mudar Tema</button>
  //       <span>Numero atual: {contador} </span>
  //     </main>
  // )


  const [nomeProduto, setNomeProduto] = useState('')
  const [precoProduto, setPrecoProduto] = useState('')
  const [fotoProduto, setFotoProduto] = useState('')

  function cadastrarProduto(event){   //passado event como parametro
    event.preventDefault()   //preventDefault para não recarregar ao realizar onclick

    //criar objeto com dados obtidos dos inputs
    const novoProdutoCadastrado = {
        name: nomeProduto,
        price: precoProduto,
        picture: fotoProduto

    }
    setAllProducts([...allProducts, novoProdutoCadastrado]) // coletando os dados do input e adionando no array allproducts

    //os valores de set abaixo, representa que todas vez que adionar no botão os campo são limpos
    setNomeProduto('')
    setPrecoProduto('')
    setFotoProduto('')
  }

  const [allProducts, setAllProducts] = useState(

    [
      {
          id: 1,
          name: 'Xbox',
          price: '3.000',
          picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
      },
      {
          id: 2,
          name: 'Playstation 5',
          price: '5.000',
          picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
      },
      {
          id: 3,
          name: 'Switch',
          price: '2.000',
          picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
      }
    ]

  )


const newProduct = {
    id: 4,
    name: 'Playstation 4',
    price: '2.000',
    picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
}

function adicionarCard(){

  setAllProducts([...allProducts, newProduct])  //utilizando "(...)" spread Opearator para pegar o valor do conteudo array antigo e adionar um novo array.

}

  return (

      <main className="setima-aula-component">

          <div className="tittle-wrapper">
              <h1>Produtos</h1>
              <button onClick={adicionarCard}>Adicionar novo produto</button>
          </div>

          <form action="" onSubmit={event => cadastrarProduto(event)}>
            <div>
                <label htmlFor="">Nome produto</label>
                <input id='nomeProduto' type="text" value={nomeProduto} onChange={event => setNomeProduto(event.target.value) } />
                {/* adionado value ={} para limpar os campos */}
            </div>
            <div>
                <label htmlFor="">Preco</label>
                <input id='nomeProduto' type="text" value={precoProduto} onChange={event => setPrecoProduto(event.target.value) } />
            </div>
            <div>
                <label htmlFor="">Foto</label>
                <input id='nomeProduto' type="text" value={fotoProduto} onChange={event => setFotoProduto(event.target.value) } />
            </div>
            <button type="submit">Cadastrar produto</button>
          </form>

          <section className='products'>
              {
                  allProducts.map(
                      product => {
                          return (
                              <SetimaAulaCardProduto
                                  productData={product}
                              />
                          )
                      }
                  )
              }
          </section>

      </main>

  )
}
