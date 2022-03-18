import React from "react";
import { connect } from "react-redux";
const Home = () => {
    return(
        <>
        <h1>Olá</h1>
        </>
    )
}

export default connect(state => ({ Component : state.Component}))(Home)