import { useState } from "react"

export default function Card() {

    const [valor, setValor] = useState(0)

    function Adicionar() {
        setValor(valor + 1)
    }
    function Remover() {
        setValor(valor - 1)
    }

    return (
        <div className="card">
            <div cclassName="card-header">
                <h1>Meu Primeiro Card</h1>
            </div>
            <div className="card-body">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </button>
                <p>{valor}</p>
            </div>
        </div>
    )
}