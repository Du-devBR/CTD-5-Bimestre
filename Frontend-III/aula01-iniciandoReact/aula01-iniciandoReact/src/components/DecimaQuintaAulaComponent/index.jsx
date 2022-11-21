import './style.sass'

export function DecimaQuintaAulaComponent(props){
  return(
    <>
      <h1>Endereço</h1>
      <p>{props.data.logradouro}, Bairro: {props.data.bairro}</p>
      <p>Cidade: {props.data.localidade}, {props.data.uf}</p>
      <button
      onClick={() => props.onDeleteLocation(props.data)}
        >
        Deletar
      </button>
    </>
  )
}
