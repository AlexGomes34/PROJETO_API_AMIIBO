'use strict'

const campoPesquisa = document.getElementById('pesquisa')
const btnPesquisa = document.getElementById('busca')
const selecao = document.getElementById('selecao')
const main = document.getElementById('main')
const container = document.getElementById('container')

const buscarDadosApi = async function(characterName){
    const url = `https://www.amiiboapi.com/api/amiibo/?character=${characterName}`
    const response = await fetch(url)
    const dados = await response.json()
    console.log(dados)
    return dados
}

buscarDadosApi()

const criarElementosHtml = async function(dados){

    const imagem = document.createElement('div')
    const img = document.createElement('img')

    img.src = dados.image


    container.appendChild(imagem)
    container.classList.add('container')
    main.append(selecao, container)
    imagem.appendChild(img)

    selecao.classList.add('selecao')
    imagem.classList.add('imagem')
    img.classList.add('img')

    img.addEventListener('click', async function(){
        criarElementosHtml2()
    })


}

const criarElementosHtml2 = async function (dados) {
    main.textContent = ''

    const principal = document.createElement('div')
    const imagem2 = document.createElement('div')
    const desc = document.createElement('div')
    const botao = document.createElement('div')
    const personagem = document.createElement('img')
    const descricao = document.createElement('h1')
    const voltar = document.createElement('button')
    const volta = document.createElement('p')
    const seta = document.createElement('img')

    main.classList.add('main2')
    principal.classList.add('principal')
    imagem2.classList.add('imagem2')
    personagem.classList.add('personagem')
    desc.classList.add('desc')
    descricao.classList.add('descricao')
    botao.classList.add('botao')
    voltar.classList.add('voltar')
    seta.classList.add('seta')


}

campoPesquisa.addEventListener('keydown', async(evento) =>{
    if(evento.key === 'Enter' || evento.keyCode === 13){

        selecao.textContent = ''
        const escolha = document.createElement('h1')
        escolha.textContent = `Personagem escolhido: ${campoPesquisa.value}`
        escolha.classList.add('texto')
        selecao.appendChild(escolha)


        const imagens = await buscarDadosApi(campoPesquisa.value)
        container.textContent = ''
        imagens.amiibo.forEach(img => criarElementosHtml(img))
    }
}) 

btnPesquisa.addEventListener('click', async () => {

    // selecao.textContent = ''
    // const escolha = document.createElement('h1')
    // escolha.textContent = `Personagem escolhido: ${campoPesquisa.value}`
    // escolha.classList.add('texto')
    // selecao.appendChild(escolha)


    // const imagens = await buscarDadosApi(campoPesquisa.value)
    // container.textContent = ''
    // imagens.amiibo.forEach(img => criarElementosHtml(img))
    criarElementosHtml2()
})