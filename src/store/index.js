import { createStore } from "redux";
import axios from "axios"

const RenderizedPage = {name: "gabriel"};

function reducer() {
    console.log("teste")
    return RenderizedPage;
}

const store = createStore(reducer)

export default store;