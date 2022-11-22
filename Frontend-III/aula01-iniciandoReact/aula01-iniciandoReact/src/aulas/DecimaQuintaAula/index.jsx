import { useState } from 'react'
import { DecimaQuintaAulaComponent } from '../../components/DecimaQuintaAulaComponent'
import './style.sass'

export function DecimaQuintaAula(){

  const [location, setLocation] = useState([])
  const [cep, setCep] = useState('')
  const [validation, setValidation] = useState(false)

  function searchCep(event){
    event.preventDefault()

    if(cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        response.json()
        .then(address => {
            if(address.erro !== undefined){
              setValidation(true)
            }else {
              setLocation([...location, address])
            }
        })
      })
    }
  }

  function deleteAddress(currentLocation){

    location.map((locations) =>{
      if(locations.cep === currentLocation.cep){
        setLocation([...location.filter((currentLocation) => locations.cep !== currentLocation.cep)
        ])
      }
    })

  }

  function removeValidation(){
    setValidation(false)
  }


  return(
    <div className="container">
      <form action="" className='container-form'>
        <h1>Cadastrar Endereços</h1>
        <div className="container-input-cep">
          <label htmlFor="">Cep</label>
          <input
            type="number"
            className='input-cep'
            placeholder='Digite um cep'
            onChange={event => setCep(event.target.value)}
            onKeyDown = {removeValidation}
          />
          {validation ? <span className='message-error'>Cep invalido, por favor digitar novamente!</span> : null}
        </div>
        <button
          className='btn-submit-cep'
          type="submit"
          onClick={event => searchCep(event)}
          >
          Cadastrar
        </button>
      </form>

      <section className='container-locations'>
        {
          location.map((locations, index) =>(
            <DecimaQuintaAulaComponent
              key={index}
              data = {locations}
              onDeleteLocation = {currentLocation => deleteAddress(currentLocation)}
            />
          ))
        }
      </section>
    </div>
  )
}
