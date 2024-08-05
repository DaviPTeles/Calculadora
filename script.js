function calcular(){
  var n11 = document.getElementById("n1").value
  var n22 = document.getElementById("n2").value
  var operator = document.getElementById("operator").value
  var v1 = Number(n11)
  var v2 = Number(n22)

  
  var r = 0
  if (operator=="plus"){
    r = v1 + v2
  }
  if (operator=="sub"){
    r = v1 - v2
  }
  if (operator=="multi"){
    r = v1 * v2
  }
  if (operator=="div"){
    r = v1 / v2
  }
  if (operator=="expo"){
    r = v1 ** v2
  }
  
   
  var result1 = document.getElementsByClassName("result")[0]
  result1.innerText ="O resultado é " + r

  if (operator=="none"){
    var result1 = document.getElementsByClassName("result")[0]
    result1.innerText ="Nenhum operador foi selecionado. Tente Novamente! "
  }

}

function display(){
  var operator = document.getElementById("operator").value
  var d = ""
  var botao = document.createElement("button")
  botao.innerHTML="<h1>Calcular</h1>"
  var b1 = document.getElementsByClassName("b1")[0]
  b1.innerHTML = "";
  botao.onclick=calcular
  if (operator=="none"){
    d = "Nenhum"
  }
  if (operator=="plus"){
    d = "Adição"
  }
  if (operator=="sub"){
    d = "Subtração"
  }
  if (operator=="multi"){
    d = "Multiplicação"
  }
  if (operator=="div"){
    d = "Divisão"
  }
  if (operator=="expo"){
    d = "Exponenciação"
  }

  var display = document.getElementsByClassName("display1")[0]
  display.innerText = "Operador Selecionado: " + d
  b1.appendChild(botao)
  
}