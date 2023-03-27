function exe1(){
    let primeiro = Number(document.getElementById("primeiro").value)
    let segundo = Number(document.getElementById("segundo").value)

    let total = primeiro - segundo
    alert("A subtração do primeiro número pelo segundo é igual a: " + total)
}

function exe2(){
    let primeiro = Number(document.getElementById("primeiro").value)
    let segundo = Number(document.getElementById("segundo").value)
    let terceiro = Number(document.getElementById("segundo").value)

    let total = primeiro * segundo * terceiro
    alert("A multiplicação dos três números é igual a: " + total)
    
}

function exe3(){
    let primeiro = Number(document.getElementById("primeiro").value)
    let segundo = Number(document.getElementById("segundo").value)

    let total = primeiro / segundo
    alert("A divisão dos dois números é igual a: " + total)
    
}

function exe4(){

    // solicita ao usuário as notas
    let primeira = Number(document.getElementById("primeira").value)
    let segunda = Number(document.getElementById("segunda").value)

    let total = (primeira * 2 + segunda * 3) / 5
    alert("A média ponderada das notas, com peso 2 para a primeira e peso 3 para a segunda, é igual a: " + total)
    
}

function exe5(){
    let preco = Number(document.getElementById("preco").value)
   

    let desconto = preco * 10/100
    let total = preco - desconto
    alert("O novo preco do produto é igual a: " + total)
    
}

function exe6(){
    //recupera o salário fixo do usuário
    //number  converte em número
    let fixo = Number(document.getElementById("fixo").value)
    //recupera as vendas do usuário
    let vendas = Number(document.getElementById("vendas").value)
    //calculando comissao
    let comissao = vendas * 4 / 100
    //calculando total
    let total = fixo + comissao

    alert("Comissão " + comissao + " Salário total " + total)

}

function exe7(){
    let peso = Number(document.getElementById("peso").value)
    let peso1 = peso * 15/100
    let peso1final = peso + peso1

    let peso2 = peso * 20/100
    let peso2final = peso - peso2

    alert("Peso se a pessoa engordar 15% " + peso1final + " peso se a pessoa emagrecer 20%  " + peso2final)
    
}

function exe8(){
    let peso = Number(document.getElementById("peso").value)
    let gramas = peso * 1000
   

    alert("Peso em gramas: " + gramas )
    
}

function exe9(){
    let maior = Number(document.getElementById("maior").value)
    let menor = Number(document.getElementById("menor").value)
    let altura = Number(document.getElementById("altura").value)

    let area = ((maior + menor) * altura)/2
   

    alert("A área do trapézio é igual a: " + area )
    
}

function exe10(){
    let lado1 = Number(document.getElementById("lado1").value)
    let lado2 = Number(document.getElementById("lado2").value)

    let area = lado1 * lado2
   

    alert("A área do quadrado é igual a: " + area )
    
}