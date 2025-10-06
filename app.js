'use strict'

const campoPesquisa = document.getElementById('pesquisa')
const btnPesqusia = document.getElementById('buscar')

const buscarDadosApi = async function(){
    const url = `https://www.amiiboapi.com/api/amiibo/`
    const response = await fetch(url)
    const dados = await response.json()
    console.log(dados)
    return dados
}

buscarDadosApi()

const criarElementosHtml = async function(){
    
}