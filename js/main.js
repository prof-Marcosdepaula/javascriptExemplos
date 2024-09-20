var cont = 0
function alerta(){
    alert("Cliquei no botão.")
    console.log("Você clicou no botão.")
}

function contador(){
    cont++
    console.log("Contador: " + cont)
    if (cont >= 10){
        alert("Você excedeu os cliques a página será fechada.")
        window.close()
    }
}

function mostrarMensagem(){
    document.getElementById("success").style.display = "block";
    document.getElementById("msg").style.display = "block";
    document.getElementById("msgBold").style.display = "block";
}



function gerarTabela(){
    
    let container = document.querySelector("#container")

    //Criando e elemento table
    let tabela = document.createElement("table")
    //Atribuindo um id para a tabela
    tabela.setAttribute("id", "tab")

    //Criando um array com os nomes das colunas
    cols = ["Nome", "Email", "Cidade", "Telefone"]
    let linha = document.createElement("tr")
    //Criando o cabeçalho da tabela (Primeira linha)
    for (i = 0; i < cols.length; i++){
        let th = document.createElement("th")
        th.innerText = cols[i]
        linha.appendChild(th)
    }
    tabela.appendChild(linha)
    
    //Criando outras linhas na tabela
    for (i = 0; i < 10; i++){
        let linha = document.createElement("tr")
        for (j = 0; j < cols.length; j++){
            let td = document.createElement("td")
            td.innerText = "Texto " + i + j
            linha.appendChild(td)
        }
        tabela.appendChild(linha)
    }

    container.appendChild(tabela)

}

function formToJSON(){
    let user = {nome: "", email: "", cidade: "", telefone: ""};
    user.nome = "Pedro"
    console.log(user)
}