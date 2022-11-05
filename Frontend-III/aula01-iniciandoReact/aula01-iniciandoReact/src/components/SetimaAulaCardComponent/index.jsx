import './style.scss'

export function SetimaAulaCardProduto(props) {

    return (

        <div className="setima-aula-card-produto-component">
            <img src={props.data.picture} />
            <div className="card-body">
                <h1>{props.data.name}</h1>
                <span>R$ {props.data.price},00</span>
            </div>
        </div>

    )

}
