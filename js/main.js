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