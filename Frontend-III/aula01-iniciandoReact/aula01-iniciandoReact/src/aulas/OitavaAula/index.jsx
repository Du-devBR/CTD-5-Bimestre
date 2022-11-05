import { useState } from 'react'
import { SetimaAulaCardProduto } from '../../components/SetimaAulaCardComponent'
import './style.scss'

export function OitavaAula(){

  const [nomeProduto, setNomeProduto] = useState('')
  const [precoProduto, setPrecoProduto] = useState('')
  const [imagemProduto, setImagemProduto] = useState('')
  const [todosProdutos, setTodosProdutos] = useState([])
  const [validacaoformulario, setValidacaoFormulario] = useState(false)

  function cadastrarNovoProduto(event){
    event.preventDefault()
    const produto = {

      name: nomeProduto,
      price: precoProduto,
      picture: imagemProduto

    }

    if(nomeProduto == '' || imagemProduto == ''|| precoProduto == '') {
      setValidacaoFormulario(true)
    }else {
      setTodosProdutos([...todosProdutos, produto])
      setNomeProduto('')
      setPrecoProduto('')
      setImagemProduto('')
    }



  }

  console.log(validacaoformulario)

  return(
    <main className='setima-aula-component'>
      <div className="tittle-wrapper">
        <h1>DHcomerce</h1>
      </div>
      <form action="" className={validacaoformulario ? 'formulario_erro' : ''} onSubmit={event => cadastrarNovoProduto(event)}>
        <div className="inputs">
        <div className="input_nameProduto">
          <label htmlFor="">Nome do produto</label>
          <input type="text" placeholder='Produto' value={nomeProduto} onChange={event => setNomeProduto(event.target.value)} />
        </div>
        <div className="input_precoProduto">
          <label htmlFor="">Preco do produto</label>
          <input type="text" placeholder='Produto'value={precoProduto} onChange={event => setPrecoProduto(event.target.value)} />
        </div>
        <div className="input_imagemProduto">
          <label htmlFor="">foto do produto</label>
          <input type="text" placeholder='Produto' value={imagemProduto} onChange={event => setImagemProduto(event.target.value) } />
        </div>
        </div>
        <button type='submit'>Adicionar no produto</button>
      </form>
      <section className='products'>
        {
          todosProdutos.map(product => {
            return(
              <SetimaAulaCardProduto
                data = {product}
              />
            )
          })
        }
      </section>
    </main>

  )
}
