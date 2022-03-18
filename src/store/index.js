import { createStore } from "redux";
import Cliente from "../components/Cliente"
import axios from "axios"
import Teste from "../components/Teste"

function reducer(state = "", action) {
    //console.log(action)

    if (action.type === "CLIENTES") {
        return {
            ...state,
        }
    }
    return state;
}

const store = createStore(reducer)

export default store;