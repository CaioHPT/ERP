import React, { useContext, useEffect, useRef } from "react"
import api from "../../api"
import { AccountContext } from "../../context/Account"


import './index.css'

const Login = () => {

    const username = useRef()
    const password = useRef()
    
    const nome = useRef()
    const cpf = useRef()

    const { isAuthenticated, setIsAuthenticated } = useContext(AccountContext)

    function logar(event){
        event.preventDefault()
        api.post("/login", {
            username: username.current.value,
            password: password.current.value
        }).then((res) => {
            localStorage.setItem("token", res.headers.authorization)
            setIsAuthenticated(localStorage.getItem("token"))
        })
        .catch((err) => console.log(err))
    }

    function sair(){
        localStorage.removeItem("token")
        setIsAuthenticated(localStorage.getItem("token"))
    }

    function enviarDado(event){
        event.preventDefault()
        api.post("/entregadores", {
            nome: nome.current.value,
            cpf: cpf.current.value
        },{
            headers: {
                'Authorization': localStorage.getItem("token")
              }
        }).then((res) => console.log(res)).catch((err) => console.log(err))
    }

    return (
        <>  
            {isAuthenticated === null ? <>
            <h2 className="mt-4">Login</h2>
            <form className="container mt-5" onSubmit={logar}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" ref={username}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" ref={password} />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            </>
            : <>
                <h1>Logado</h1>
                <button onClick={sair}>Sair</button>
                <h4>Adicionar Entregador</h4>
                <form className="container mt-5" onSubmit={enviarDado}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" ref={nome}/>
                </div>
                <div className="form-group">
                    <label>CPF</label>
                    <input type="text" className="form-control" ref={cpf} />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            </>}
        </>
    )
}

export default Login