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
        main.textContent = ''
        criarElementosHtml2(dados)
    })


}

const criarElementosHtml2 = async function (dados) {
    
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
    volta.classList.add('volta')
    seta.classList.add('seta')

    personagem.src = dados.image
    descricao.innerHTML = `Amiibo Series: ${dados.amiiboSeries} <br>
    <br> Name: ${dados.name} <br>
    <br> Game Series: ${dados.gameSeries} <br>
    <br> Type: ${dados.type}`

    volta.innerHTML = 'VOLTAR'
    seta.src = 'img/Vector.svg'


    main.append(principal, botao)
    principal.append(imagem2, desc)
    imagem2.appendChild(personagem)
    desc.appendChild(descricao)
    botao.appendChild(voltar)
    voltar.append(volta, seta)

    voltar.addEventListener('click', async () =>{
        main.textContent = ''

    selecao.textContent = ''
    const escolha = document.createElement('h1')
    escolha.textContent = `Personagem escolhido: ${campoPesquisa.value}`
    escolha.classList.add('texto')
    selecao.appendChild(escolha)


    const imagens = await buscarDadosApi(campoPesquisa.value)
    container.textContent = ''
    imagens.amiibo.forEach(img => criarElementosHtml(img))
    })

    campoPesquisa.addEventListener('keydown', async(evento) =>{
    if(evento.key === 'Enter' || evento.keyCode === 13){
        main.textContent = ''

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
    main.textContent = ''

    selecao.textContent = ''
    const escolha = document.createElement('h1')
    escolha.textContent = `Personagem escolhido: ${campoPesquisa.value}`
    escolha.classList.add('texto')
    selecao.appendChild(escolha)


    const imagens = await buscarDadosApi(campoPesquisa.value)
    container.textContent = ''
    imagens.amiibo.forEach(img => criarElementosHtml(img))
})