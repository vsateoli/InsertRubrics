// ==UserScript==
// @name         InsertRubrics
// @version      1.0
// @author       Venâncio Oliveira
// @match        http://homologa.provisoesrh.saeb.ba.gov.br/*
// @include        http://homologa.provisoesrh.saeb.ba.gov.br/*
// @include        http://desenv.provisoesrh.saeb.ba.gov.br/*
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(document).keypress("q",function(e) {
    if(e.ctrlKey) {
        insertRubrics();
    }
});

function getIterator(){
    //verificando se hiddenfield existe
    if($('#iteradorRubrics').length == 0){
        $('<input>', {
            type: 'hidden',
            id: 'iteradorRubrics',
            name: 'iteradorRubrics',
            value: 0
        }).appendTo('.v-card')[0];
        return 0
    }
    else{
        var iterator = parseInt($('#iteradorRubrics')[0].value) + 1

        if(document.getElementsByTagName("table")[0]){
            if(document.getElementsByTagName("table")[0].rows.length > iterator){
                $('#iteradorRubrics')[0].value = iterator
                return iterator
            }
        }
        return -1
    }
}

function insertRubrics(){
    var i = getIterator();
    if (i == -1) return
    if(document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[1]){
        var coluna = document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[1].outerText
        var valor = document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[0].outerText
        }
    else{
        return
    }
    // grat, dec, ferias
    if (coluna == "Adic Tempo de Serviço" || coluna == "Adicional Insalubridade" || coluna == "Anuênio" || coluna == "Cargo comissionado"
        || coluna == "Dif Cargo Comissionado" || coluna == "Função Incorporada" || coluna == "Hora Extra Incorp" || coluna == "Periculosidade"
        || coluna == "Salário Base" || coluna == "Vencimento" || coluna == "Sal. maternidade - Mensal"){
        document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].click()
        document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].click()
        document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].click()
    }
    // dec, ferias
    else if (coluna == "Adicional Noturno Horas" || coluna == "Anuênio" || coluna == "Cargo comissionado" || coluna == "Dif Cargo Comissionado"
             || coluna == "Função Incorporada" || coluna == "Honorários" || coluna == "Hora Extra 100%" || coluna == "Hora Extra 150%" || coluna == "Hora Extra 50%"
             || coluna == "Hora Extra Incorp" || coluna == "Hora Extra Noturna" || coluna == "Hora Extra Noturna 100%" || coluna == "Hora Extra Noturna 150%"
             || coluna == "Hora Sobreaviso" || coluna == "Médias férias" || coluna == "Periculosidade" || coluna == "Repouso Remunerado"
             || coluna == "Salário Base" || coluna == "Substituição"){
        document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].click()
        document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].click()
    }
    // dec
    else if(coluna == "Grat de Incent Desempenho" || coluna == "Grat Exec Ativ Ciclo Gest" || coluna == "Gratificação PRODEB" || coluna == "Gratificação Semestral"){
        document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[3].getElementsByTagName("input")[0].click()
        document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].click()
    }
    else{
        document.getElementsByTagName("table")[0].rows[i].getElementsByTagName("td")[5].getElementsByTagName("input")[0].click()
    }
}