import './style.sass'

export function DecimaQuintaAulaComponent(props){
  return(
    <div className='container-card'>
      <h1>Endereço</h1>
      <p>{props.data.logradouro}, Bairro: {props.data.bairro}</p>
      <p>Cidade: {props.data.localidade}, {props.data.uf}</p>
      <button
        className='btn-delete-card'
        onClick={() => props.onDeleteLocation(props.data)}
        >
        Deletar
      </button>
    </div>
  )
}
