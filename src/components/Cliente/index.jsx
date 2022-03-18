import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import cepApi from "../../utils/cepApi"

const Cliente = () => {
  
    const [cliente, setCliente] = useState();

    useEffect(async () => {
        const response = await cepApi.get("/02915100/json/")
        response ? setCliente(response.data) : console.log("ERRO NA BUSCA DO ENDEREÇO: " + response)
    },[])

    return(
        <div>
            <h1>GABRIEL SALES</h1>
            <h2>Endereço</h2>
            <ul>
                <li>Logradouro : {cliente?.logradouro}</li>
                <li>Número: 587</li>
                <li>Bairro : {cliente?.bairro}</li>
                <li>Cidade : {cliente?.localidade}</li>
                <li>UF : {cliente?.uf}</li>
            </ul>
        </div>
    )
}

export default Cliente